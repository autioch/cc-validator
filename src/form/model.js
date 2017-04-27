const { merge } = require('utils');
const { Emitter } = require('components');
const { modelFactory: fieldModelFactory } = require('./field');

const defaultConfig = {
  valid: true,
  locked: false,
  visible: true
};

function CcValidatorModel(config, fields) {
  Emitter.call(this);
  this.config = merge(defaultConfig, config);
  this.fields = fields.map((field) => {
    const fieldModel = fieldModelFactory(field);

    fieldModel.on('change:valid', this.syncValid, this);

    return fieldModel;
  });
  this.syncValid();
  this.on('change:value', this.syncValid, this);
}

CcValidatorModel.prototype = merge(Emitter.prototype, {
  constructor: CcValidatorModel,

  syncValid() {
    this.set('valid', this.validate());
  },
  validate() {
    return this.fields.every((fieldModel) => fieldModel.get('valid'));
  },
  set(property, value) {
    this.config[property] = value;

    return this.emit(`change:${property}`, this, value);
  },
  get(property) {
    return this.config[property];
  },
  serialize() {
    return this.fields.map((fieldModel) => fieldModel.serialize());
  },
  save() {
    /* Extra check to not rely on other states (DOM). */
    this.syncValid();
    if (!this.get('valid')) {
      return;
    }
    this.emit('save', this.serialize());
  }
});

module.exports = CcValidatorModel;

const { merge } = require('utils');
const { Model } = require('components');
const { modelFactory: fieldModelFactory } = require('./field');

function CcValidatorModel(config, fields) {
  Model.call(this);
  this.fields = fields.map((field) => {
    const fieldModel = fieldModelFactory(field);

    fieldModel.on('change:valid', this.syncValid, this);

    return fieldModel;
  });
  this.syncValid();
  this.on('change:value', this.syncValid, this);
}

CcValidatorModel.prototype = merge(Model.prototype, {
  constructor: CcValidatorModel,
  defaultConfig() {
    return {
      valid: true,
      locked: false,
      visible: true
    };
  },
  syncValid() {
    this.set('valid', this.validate());
  },
  validate() {
    return this.fields.every((fieldModel) => fieldModel.get('valid'));
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

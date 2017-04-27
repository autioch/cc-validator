const { merge, clone } = require('utils');
const { Emitter } = require('components');

const defaultConfig = {
  key: null,
  value: false,
  label: '',
  visible: true,
  required: true,
  valid: true
};

function FieldModel(config = {}) {
  Emitter.call(this);
  this.config = merge(defaultConfig, config);
  this.syncValid();
  this.on('change:value', this.syncValid, this);
}

FieldModel.prototype = merge(Emitter.prototype, {
  constructor: FieldModel,
  syncValid() {
    this.set('valid', this.validate());
  },
  validate() {
    return true;
  },
  set(property, value) {
    this.config[property] = value;

    return this.emit(`change:${property}`, this, value);
  },
  get(property) {
    return this.config[property];
  },
  serialize() {
    return clone(this.config);
  }
});

module.exports = FieldModel;

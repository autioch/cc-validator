const { merge, clone } = require('utils');
const { Emitter } = require('components');

const defaultConfig = {
  value: false,
  label: '',
  visible: true,
  required: true
};

function FieldModel(config) {
  Emitter.call(this);

  this.config = merge(defaultConfig, config);
}

FieldModel.prototype = merge(Emitter.prototype, {
  constructor: FieldModel,
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

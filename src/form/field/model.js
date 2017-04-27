const { merge } = require('utils');
const { Model } = require('components');

const defaultConfig = {
  key: null,
  value: false,
  label: '',
  visible: true,
  required: true,
  valid: true
};

function FieldModel(config = {}) {
  Model.call(this);
  this.config = merge(defaultConfig, config);
  this.syncValid();
  this.on('change:value', this.syncValid, this);
}

FieldModel.prototype = merge(Model.prototype, {
  constructor: FieldModel,
  syncValid() {
    this.set('valid', this.validate());
  },
  validate() {
    return true;
  }
});

module.exports = FieldModel;

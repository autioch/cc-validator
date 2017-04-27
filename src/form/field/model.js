const { merge } = require('utils');
const { Model } = require('components');

const defaultConfig = {
  key: null,
  value: null,
  label: '',
  visible: true,
  required: true,
  valid: true,
  fresh: true
};

function FieldModel(config = {}) {
  Model.call(this);
  this.config = merge(defaultConfig, config);
  this.set('valid', this.validate());
  this.on('change:value', this.syncValid, this);
}

FieldModel.prototype = merge(Model.prototype, {
  constructor: FieldModel,
  syncValid() {
    this.set('fresh', false).set('valid', this.validate());
  },
  validate() {
    return true;
  }
});

module.exports = FieldModel;

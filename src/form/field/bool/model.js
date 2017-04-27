const { merge, clone } = require('utils');

const defaultConfig = {
  value: false,
  label: '',
  visible: true,
  required: true
};

function BooleanFieldModel(config) {
  this.config = merge(defaultConfig, config);
}

BooleanFieldModel.prototype = {
  constructor: BooleanFieldModel,
  validate() {
    return true;
  },
  serialize() {
    return clone(this.config);
  }
};

module.exports = BooleanFieldModel;

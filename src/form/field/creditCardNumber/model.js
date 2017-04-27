const { merge, clone } = require('utils');

const defaultConfig = {
  value: '',
  label: '',
  visible: true,
  required: true
};

function CreditCardNumberFieldModel(config) {
  this.config = merge(defaultConfig, config);
}

CreditCardNumberFieldModel.prototype = {
  constructor: CreditCardNumberFieldModel,
  validate() {
    return true;
  },
  serialize() {
    return clone(this.config);
  }
};

module.exports = CreditCardNumberFieldModel;

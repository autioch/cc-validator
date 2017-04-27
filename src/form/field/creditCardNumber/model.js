const { merge } = require('utils');
const FieldModel = require('../model');

const creditCardNumberLength = 16;

function CreditCardNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CreditCardNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CreditCardNumberFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    const value = this.get('value').replace(/\D/g, '');

    return value.length === creditCardNumberLength;
  }
});

module.exports = CreditCardNumberFieldModel;

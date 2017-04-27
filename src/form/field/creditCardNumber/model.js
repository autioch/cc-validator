const { merge } = require('utils');
const FieldModel = require('../model');

function CreditCardNumberFieldModel(config) {
  FieldModel.call(this, config);
}

CreditCardNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CreditCardNumberFieldModel,
  validate() {
    return true;
  }
});

module.exports = CreditCardNumberFieldModel;

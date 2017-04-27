const { merge } = require('utils');
const FieldModel = require('../model');
const validate = require('./validate');

function CreditCardNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CreditCardNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CreditCardNumberFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return validate(this.get('value'));
  }
});

module.exports = CreditCardNumberFieldModel;

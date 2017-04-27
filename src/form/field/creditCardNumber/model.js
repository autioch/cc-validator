const { merge } = require('utils');
const FieldModel = require('../model');

function CreditCardNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CreditCardNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CreditCardNumberFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return this.get('value').length > 3;
  }
});

module.exports = CreditCardNumberFieldModel;

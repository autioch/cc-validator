const { merge } = require('utils');
const FieldModel = require('../model');

function CvvNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CvvNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CvvNumberFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }
    const value = this.get('value');
    const expectedValue = parseInt(value, 10);

    return value.length === 3 && !isNaN(expectedValue) && expectedValue.toString() === value;
  }
});

module.exports = CvvNumberFieldModel;

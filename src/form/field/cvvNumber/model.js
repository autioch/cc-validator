const { merge } = require('utils');
const FieldModel = require('../model');
const validate = require('./validate');

function CvvNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CvvNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CvvNumberFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return validate(this.get('value'));
  }
});

module.exports = CvvNumberFieldModel;

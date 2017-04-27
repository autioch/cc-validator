const { merge } = require('utils');
const FieldModel = require('../model');

function CvvNumberFieldModel(config = {}) {
  FieldModel.call(this, config);
}

CvvNumberFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: CvvNumberFieldModel,
  validate() {
    return true;
  }
});

module.exports = CvvNumberFieldModel;

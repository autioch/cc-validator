const { merge } = require('utils');
const FieldModel = require('../model');

function BooleanFieldModel(config = {}) {
  FieldModel.call(this, config);
}

BooleanFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: BooleanFieldModel,
  validate() {
    return true;
  }
});

module.exports = BooleanFieldModel;

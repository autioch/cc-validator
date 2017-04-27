const { merge } = require('utils');
const FieldModel = require('../model');
const validate = require('./validate');

function BooleanFieldModel(config = {}) {
  FieldModel.call(this, config);
}

BooleanFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: BooleanFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return validate(this.get('value'));
  }
});

module.exports = BooleanFieldModel;

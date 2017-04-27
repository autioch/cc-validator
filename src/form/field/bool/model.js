const { merge } = require('utils');
const FieldModel = require('../model');

function BooleanFieldModel(config = {}) {
  FieldModel.call(this, config);
}

BooleanFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: BooleanFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return this.get('value');
  }
});

module.exports = BooleanFieldModel;

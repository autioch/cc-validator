const { merge } = require('utils');
const FieldModel = require('../model');

function DateFieldModel(config = {}) {
  FieldModel.call(this, config);
}

DateFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: DateFieldModel,
  validate() {
    return true;
  }
});

module.exports = DateFieldModel;

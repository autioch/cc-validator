const { merge } = require('utils');
const FieldModel = require('../model');
const validate = require('./validate');

function DateFieldModel(config = {}) {
  FieldModel.call(this, config);
}

DateFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: DateFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return validate(this.get('value'));
  }
});

module.exports = DateFieldModel;

const { merge } = require('utils');
const FieldModel = require('../model');

function EmailFieldModel(config) {
  FieldModel.call(this, config);
}

EmailFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: EmailFieldModel,
  validate() {
    return true;
  }
});

module.exports = EmailFieldModel;

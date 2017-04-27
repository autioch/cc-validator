const { merge } = require('utils');
const FieldModel = require('../model');
const validate = require('./validate');

function EmailFieldModel(config = {}) {
  FieldModel.call(this, config);
  this.on('change:required', this.syncValid, this);
}

EmailFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: EmailFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return validate(this.get('value'));
  }
});

module.exports = EmailFieldModel;

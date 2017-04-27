const { merge } = require('utils');
const FieldModel = require('../model');

const dateRegex = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

function DateFieldModel(config = {}) {
  FieldModel.call(this, config);
}

DateFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: DateFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    return dateRegex.test(this.get('value'));
  }
});

module.exports = DateFieldModel;

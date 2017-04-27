const { merge, clone } = require('utils');

const defaultConfig = {
  value: '',
  label: '',
  visible: true,
  required: true
};

function EmailFieldModel(config) {
  this.config = merge(defaultConfig, config);
}

EmailFieldModel.prototype = {
  constructor: EmailFieldModel,
  validate() {
    return true;
  },
  serialize() {
    return clone(this.config);
  }
};

module.exports = EmailFieldModel;

const { merge, clone } = require('utils');

const defaultConfig = {
  value: '',
  label: '',
  visible: true,
  required: true
};

function DateFieldModel(config) {
  this.config = merge(defaultConfig, config);
}

DateFieldModel.prototype = {
  constructor: DateFieldModel,
  validate() {
    return true;
  },
  serialize() {
    return clone(this.config);
  }
};

module.exports = DateFieldModel;

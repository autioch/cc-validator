const { merge, clone } = require('utils');

const defaultConfig = {
  value: '',
  label: '',
  visible: true,
  required: true
};

function CvvNumberFieldModel(config) {
  this.config = merge(defaultConfig, config);
}

CvvNumberFieldModel.prototype = {
  constructor: CvvNumberFieldModel,
  validate() {
    return true;
  },
  serialize() {
    return clone(this.config);
  }
};

module.exports = CvvNumberFieldModel;

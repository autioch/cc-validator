const { merge } = require('utils');
const { modelFactory: fieldModelFactory } = require('./field');

const defaultConfig = {};

function CcValidatorModel(config, fields) {
  this.config = merge(defaultConfig, config);
  this.fields = fields.map(fieldModelFactory);
}

CcValidatorModel.prototype = {
  constructor: CcValidatorModel,
  validate() {
    return this.fields.every((fieldModel) => fieldModel.validate());
  },
  serialize() {
    return this.fields.map((fieldModel) => fieldModel.serialize());
  }
};

module.exports = CcValidatorModel;

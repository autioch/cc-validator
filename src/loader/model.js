const { merge } = require('utils');
const { Model } = require('components');

function LoaderModel(config = {}) {
  Model.call(this, config);
}

LoaderModel.prototype = merge(Model.prototype, {
  constructor: LoaderModel,
  defaultConfig() {
    return {
      message: 'Success'
    };
  }
});

module.exports = LoaderModel;

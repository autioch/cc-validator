const { merge } = require('utils');
const { Model } = require('components');

function MessageModel(config = {}) {
  Model.call(this, config);
}

MessageModel.prototype = merge(Model.prototype, {
  constructor: MessageModel,
  defaultConfig() {
    return {
      message: 'Success'
    };
  }
});

module.exports = MessageModel;

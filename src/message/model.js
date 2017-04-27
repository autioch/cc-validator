const { merge } = require('utils');

const defaultConfig = {
  message: 'Success'
};

function MessageModel(config = {}) {
  this.config = merge(defaultConfig, config);
}

MessageModel.prototype = {
  constructor: MessageModel
};

module.exports = MessageModel;

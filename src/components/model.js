const { merge, clone } = require('utils');
const Emitter = require('./emitter');

function Model(config = {}) {
  Emitter.call(this);
  this.config = merge(this.defaultConfig(), config);
}

Model.prototype = merge(Emitter.prototype, {
  constructor: Model,
  defaultConfig() {
    return {};
  },
  set(property, value) {
    this.config[property] = value;

    return this.emit(`change:${property}`, this, value);
  },
  get(property) {
    return this.config[property];
  },
  serialize() {
    return clone(this.config);
  }
});

module.exports = Model;

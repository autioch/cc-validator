/* eslint no-underscore-dangle: 0 */
/* Due to time limit, implemented instead of observable. */
function Emitter() {
  this.__listeners = {};
}

Emitter.prototype = {
  constructor: Emitter,
  getListeners(eventName) {
    if (!this.__listeners[eventName]) {
      this.__listeners[eventName] = [];
    }

    return this.__listeners[eventName];
  },
  emit(eventName, ...params) {
    this
      .getListeners(eventName)
      .forEach(({ callback, context }) => callback.apply(context, params));

    return this;
  },
  on(eventName, callback, context) {
    this
      .getListeners(eventName)
      .push({
        callback,
        context
      });

    return this;
  },
  off(eventName, callback = false) {
    const listeners = this.getListeners(eventName);

    if (callback) {
      this.__listeners[eventName] = listeners.filter((listener) => listener.callback !== callback);

      return this;
    }
    if (eventName) {
      this.__listeners[eventName] = [];

      return this;
    }

    Object.keys(this.__listeners).forEach((key) => {
      this.listeners[key] = null;
    });

    this.listeners = [];

    return this;
  }
};

module.exports = Emitter;

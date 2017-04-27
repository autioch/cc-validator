const { merge } = require('utils');
const { Emitter } = require('components');

const defaultConfig = {
  valid: true,
  isSaving: false,
  isSaved: false,
  savePromise: null,
  savedData: null,
  waitTime: 0
};

function StoreModel(config = {}) {
  Emitter.call(this);
  this.config = merge(defaultConfig, config);
}

StoreModel.prototype = {
  constructor: StoreModel,
  save(dataToSave) {
    if (!this.config.isSaving) {
      this.config.isSaving = true;
      this.config.savePromise = this.requestSave(dataToSave).then(() => {
        this.config.isSaving = false;
        this.config.isSaved = true;
        this.config.savePromise = null;
      });
    }

    return this.config.savePromise;
  },

  /* This should a service, but not enough time. */
  requestSave(dataToSave) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(dataToSave), this.waitTime);
    });
  }
};

module.exports = StoreModel;

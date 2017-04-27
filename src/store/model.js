const { merge } = require('utils');
const { Model } = require('components');

function StoreModel(config = {}) {
  Model.call(this, config);
}

StoreModel.prototype = merge(Model.prototype, {
  constructor: StoreModel,
  defaultConfig() {
    return {
      valid: true,
      isSaving: false,
      isSaved: false,
      savePromise: null,
      savedData: null,
      waitTime: 0
    };
  },
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
});

module.exports = StoreModel;

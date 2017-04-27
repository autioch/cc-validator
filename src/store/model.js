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
    if (!this.get('isSaving')) {
      this.set('isSaving', true);
      const savePromise = new Promise((resolve) => setTimeout(() => resolve(dataToSave), this.get('waitTime')))
        .then(() => this.set('isSaving', false).set('isSaved', true).set('savePromise', null));

      this.set('savePromise', savePromise);
    }

    return this.get('savePromise');
  }
});

module.exports = StoreModel;

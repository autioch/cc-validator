const { merge } = require('utils');
const { Model } = require('components');
const modelFactory = require('./field/modelFactory');

function FormModel(config, fields) {
  Model.call(this, config);
  this.fields = fields.map((field) => {
    const fieldModel = modelFactory(field);

    fieldModel.on('change:valid', this.syncValid, this);

    return fieldModel;
  });
  this.syncValid();
  this.on('change:value', this.syncValid, this);
}

FormModel.prototype = merge(Model.prototype, {
  constructor: FormModel,
  defaultConfig() {
    return {
      valid: false,
      locked: false,
      visible: true,
      header: ''
    };
  },
  syncValid() {
    this.set('valid', this.validate());
  },
  validate() {
    return this.fields
      .filter((fieldModel) => fieldModel.get('required'))
      .every((fieldModel) => fieldModel.get('valid'));
  },
  serialize() {
    return this.fields.map((fieldModel) => fieldModel.serialize());
  },
  setFieldValue(key, value) {
    const field = this.getField(key);

    if (!field) {
      throw Error(`FormModel does not have field ${key}.`);
    }

    field.set('value', value);
  },
  getField(key) {
    return this.fields.find((fieldModel) => fieldModel.config.key === key);
  },
  save() {
    /* Extra check to not rely on other states (DOM). */
    this.fields
      .filter((fieldModel) => fieldModel.get('required'))
      .forEach((fieldModel) => {
        fieldModel.set('fresh', false);
        fieldModel.validate();
      });

    if (!this.get('valid')) {
      return;
    }
    this.emit('save', this.serialize());
  }
});

module.exports = FormModel;

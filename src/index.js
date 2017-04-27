/* eslint no-console: 0 */
const { config, fields, waitTime } = require('schema');
const FormModel = require('form/model');
const StoreModel = require('store/model');
const LoaderModel = require('loader/model');
const MessageModel = require('message/model');

const formModel = new FormModel(config, fields);
const storeModel = new StoreModel({
  waitTime
});

formModel.on('save', (formData) => {
  formModel.set('locked', true);

  /* TODO Show loader */
  const loaderModel = new LoaderModel();

  storeModel
    .save(formData)
    .then(() => {
      /* TODO Hide loader */
      formModel.set('visible', false);
      const messageModel = new MessageModel();
    });
});

/* Some quick tests. */
formModel.on('change:valid', (...params) => console.log(params));
formModel.set('valid', false);
formModel.on('save', (formData) => console.log(formData));

formModel.fields[0].set('valid', false);
formModel.fields[0].set('valid', true);

formModel.save();

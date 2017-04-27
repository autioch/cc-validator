const { config, fields, waitTime, successMessage } = require('schema');
const FormModel = require('form/model');
const StoreModel = require('store/model');
const LoaderModel = require('loader/model');
const MessageModel = require('message/model');

function AppModel() {
  this.formModel = new FormModel(config, fields);
  this.loaderModel = new LoaderModel();
  this.messageModel = new MessageModel({
    message: successMessage
  });

  this.storeModel = new StoreModel({
    waitTime
  });

  this.storeModel.on('change:isSaving', (storeModel, isSaving) => this.loaderModel.set('visible', isSaving));
  this.storeModel.on('change:isSaving', (storeModel, isSaving) => this.formModel.set('locked', isSaving));

  this.storeModel.on('change:isSaved', (storeModel, isSaved) => this.messageModel.set('visible', isSaved));
  this.storeModel.on('change:isSaved', (storeModel, isSaved) => this.formModel.set('visible', isSaved));

  this.formModel.on('save', (formData) => this.storeModel.save(formData));
}

module.exports = AppModel;

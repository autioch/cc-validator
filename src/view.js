const MessageView = require('./message/view');
const LoaderView = require('./loader/view');
const FormView = require('./form/view');

const container = document.body;

function AppView(appModel) {
  this.messageView = new MessageView(appModel.messageModel);
  this.loaderView = new LoaderView(appModel.loaderModel);
  this.formView = new FormView(appModel.formModel);

  container.appendChild(this.messageView.el);
  container.appendChild(this.loaderView.el);
  container.appendChild(this.formView.el);
}

module.exports = AppView;

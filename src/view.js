const MessageView = require('./message/view');
const LoaderView = require('./loader/view');

const container = document.body;

function AppView(appModel) {
  this.messageView = new MessageView(appModel.messageModel);
  this.loaderView = new LoaderView(appModel.loaderModel);

  container.appendChild(this.messageView.el);
  container.appendChild(this.loaderView.el);
}

module.exports = AppView;

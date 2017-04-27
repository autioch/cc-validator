const { merge } = require('utils');
const { View } = require('components');

require('./styles');

function MessageView(model) {
  View.call(this, model);
}

MessageView.prototype = merge(View.prototype, {
  className: 'm-message',
  props: ['visible'],
  render() {
    this.el.textContent = this.model.get('message');
  }
});

module.exports = MessageView;

const { merge } = require('utils');
const { View } = require('components');

require('./styles');

function LoaderView(model) {
  View.call(this, model);
}

LoaderView.prototype = merge(View.prototype, {
  className: 'm-loader',
  props: ['visible'],
  render() {
    this.el.textContent = 'Loading, please wait...';
  }
});

module.exports = LoaderView;

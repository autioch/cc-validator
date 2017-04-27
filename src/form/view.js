const { merge } = require('utils');
const { View } = require('components');
const { viewFactory: fieldViewFactory } = require('./field');

require('./styles');

function LoaderView(model) {
  View.call(this, model);
}

LoaderView.prototype = merge(View.prototype, {
  className: 'm-form',
  props: ['visible'],
  render() {
    this.subviews = this.model.fields.map((fieldModel) => fieldViewFactory(fieldModel)).filter((a) => a);

    this.subviews.forEach((subview) => this.el.appendChild(subview.el));
  }
});

module.exports = LoaderView;

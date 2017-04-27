const { merge, tag } = require('utils');
const { View } = require('components');

require('./styles');

function BooleanFieldView(model) {
  View.call(this, model);
  this.el.checked = this.model.get('value');
}

BooleanFieldView.prototype = merge(View.prototype, {
  tagName: 'label',
  className: 'c-field__boolean',
  props: ['visible'],
  render() {
    const inputEl = tag('input', {
      type: 'checkbox',
      value: this.model.get('value')
    });

    this.el.appendChild(inputEl);
    this.el.appendChild(tag('span', this.model.get('label')));
  }
});

module.exports = BooleanFieldView;

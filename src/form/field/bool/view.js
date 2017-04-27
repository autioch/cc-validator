const { merge, tag, empty } = require('utils');
const { View } = require('components');

require('./styles');

function BooleanFieldView(model) {
  View.call(this, model);
  this.el.checked = this.model.get('value');
}

BooleanFieldView.prototype = merge(View.prototype, {
  tagName: 'label',
  className: 'c-field c-field__boolean',
  props: ['visible', 'valid', 'fresh'],
  render() {
    empty(this.el);
    this.el.appendChild(tag('div.c-field__header', this.model.get('label')));
    this.el.appendChild(this.getInputEl());
  },
  getInputEl() {
    if (!this.inputEl) {
      this.inputEl = tag('input.c-field__input', {
        type: 'checkbox',
        value: this.model.get('value')
      });

      /* Those aren't unbound - lack of time. */
      this.inputEl.addEventListener('change', this.syncValue.bind(this));
    }

    return this.inputEl;
  },
  syncValue() {
    this.model.set('value', !!this.inputEl.checked);
  }
});

module.exports = BooleanFieldView;

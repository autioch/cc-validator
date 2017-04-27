const { merge, tag, empty } = require('utils');
const { View } = require('components');

require('./styles');

function EmailFieldView(model) {
  View.call(this, model);
  this.el.checked = this.model.get('value');
}

EmailFieldView.prototype = merge(View.prototype, {
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
        type: 'text',
        value: this.model.get('value'),
        placeholder: 'john.doe@gmail.com'
      });

      /* Those aren't unbound - lack of time. */
      this.inputEl.addEventListener('change', this.syncValue.bind(this));
      this.inputEl.addEventListener('keyup', this.syncValue.bind(this));
      this.inputEl.addEventListener('blur', this.syncValue.bind(this));
    }

    return this.inputEl;
  },
  syncValue() {
    this.model.set('value', this.inputEl.value);
  }
});

module.exports = EmailFieldView;

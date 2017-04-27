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
    this.el.appendChild(this.getInputEl());
    this.el.appendChild(tag('span', this.model.get('label')));
  },
  getInputEl() {
    if (!this.inputEl) {
      this.inputEl = tag('input', {
        type: 'text',
        value: this.model.get('value')
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

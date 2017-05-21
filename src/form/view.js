const { merge, tag, toggleClass } = require('utils');
const { View } = require('components');
const viewFactory = require('./field/viewFactory');

require('./styles');

function FormView(model) {
  View.call(this, model);
  toggleClass(this.el, 'is-valid', this.model.get('valid'));
}

FormView.prototype = merge(View.prototype, {
  className: 'm-form',
  props: ['visible', 'locked', 'valid'],
  render() {
    this.el.appendChild(tag('header.m-form__header', this.model.get('header')));
    this.subviews = this.model.fields.map((fieldModel) => viewFactory(fieldModel));

    this.subviews.forEach((subview) => this.el.appendChild(subview.el));

    this.el.appendChild(this.getSubmitEl());
  },
  getSubmitEl() {
    if (!this.submitEl) {
      this.submitEl = tag('span.m-form__submit', this.model.config.submitLabel);

      /* Those aren't unbound - lack of time. */
      this.submitEl.addEventListener('click', () => this.model.save());
    }

    return this.submitEl;
  }
});

module.exports = FormView;

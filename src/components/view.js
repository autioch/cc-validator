const { tag, toggleClass } = require('utils');

function View(model) {
  this.el = tag(`${this.tagName}.${this.className}`);
  this.model = model;
  this.props.forEach((propertyName) => toggleClass(this.el, `is-${propertyName}`, this.model.get(propertyName)));

  /* Autobind props to the classNames. */
  this.props.forEach((propertyName) => {
    const className = `is-${propertyName}`;

    /* This is not unbound - lack of time. */
    this.model.on(`change:${propertyName}`, () => toggleClass(this.el, className, this.model.get(propertyName)));
  });
  this.render();
}

View.prototype = {
  className: '',
  tagName: 'div',
  constructor: View,
  render() {
    return this;
  },
  props: [],

  /* This is implemented, however no views are being removed. */
  remove() {
    /* this.el.remove() is not implemented everywhere. */
    if (this.el.parentNode) {
      this.el.parentNode.remove(this.el);
    }

    /* Nullify everything to avoid memory leaks. */
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
  }
};

module.exports = View;

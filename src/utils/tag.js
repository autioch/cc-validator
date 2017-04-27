const forOwn = require('./forOwn');

function isNode(option) {
  return option && ((option.nodeName && option.nodeType) || option instanceof Text);
}

module.exports = function tag(tagAndClassName, ...options) {
  let el;

  if (typeof tagAndClassName === 'string') {
    const [tagName, ...classNames] = tagAndClassName.split('.');

    el = document.createElement(tagName === '' ? 'div' : tagName);

    if (classNames.length) {
      el.className = classNames.join(' ');
    }
  } else {
    el = document.createElement('div');
    if (tagAndClassName !== undefined) { // eslint-disable-line no-undefined
      options.unshift(tagAndClassName);
    }
  }

  options.forEach((option) => {
    if (Array.isArray(option)) {
      option.forEach((value) => el.appendChild(isNode(value) ? value : document.createTextNode(value)));
    } else if (isNode(option)) {
      el.appendChild(option);
    } else if ((option !== null) && (typeof option === 'object')) {
      forOwn(option, (value, key) => {
        el[key] = value;
      });
    } else {
      el.appendChild(document.createTextNode(option));
    }
  });

  return el;
};

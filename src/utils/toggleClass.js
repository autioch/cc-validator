/* IE doesn't support classList.toggle second parameter. */
module.exports = function toggleClass(el, className, condition) {
  if (condition) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }

  return el;
};

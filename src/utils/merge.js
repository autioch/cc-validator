// Object.assign not supported in IE.
module.exports = function merge(...parts) {
  const result = {};

  parts.forEach((part) => {
    Object.keys(part).forEach((prop) => {
      result[prop] = part[prop];
    });
  });

  return result;
};

/* Safely return a copy of an object. Only fails with circular properties. */
module.exports = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

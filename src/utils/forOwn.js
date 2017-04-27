module.exports = function forOwn(object, callback) {
  const keys = Object.keys(object);

  for (let index = 0; index < keys.length; index++) {
    callback(object[keys[index]], keys[index]);
  }
};

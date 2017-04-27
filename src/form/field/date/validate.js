const dateRegex = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

module.exports = function validate(value) {
  return dateRegex.test(value);
};

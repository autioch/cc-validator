const creditCardNumberLength = 16;

module.exports = function validate(value) {
  const parsedValue = value.replace(/\D/g, '');

  return parsedValue.length === creditCardNumberLength;
};

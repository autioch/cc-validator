const ccvLength = 3;

module.exports = function validate(value) {
  const expectedValue = parseInt(value, 10);

  return value.length === ccvLength && !isNaN(expectedValue) && expectedValue.toString() === value;
};

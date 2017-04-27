module.exports = function validate(value) {
  const expectedValue = parseInt(value, 10);

  return value.length === 3 && !isNaN(expectedValue) && expectedValue.toString() === value;
};

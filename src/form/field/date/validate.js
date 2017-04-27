const dateRegex = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

const currentDate = new Date();

module.exports = function validate(value) {
  if (!dateRegex.test(value)) {
    return false;
  }

  const enteredDate = new Date(value);

  if (isNaN(enteredDate.getTime())) {
    return false;
  }

  return enteredDate > currentDate;
};

require('./styles');

const ViewTypes = {
  bool: require('./bool/view'),
  creditCardNumber: require('./creditCardNumber/view'),
  cvvNumber: require('./cvvNumber/view'),
  date: require('./date/view'),
  email: require('./email/view')
};

module.exports = function viewFactory(model) {
  if (ViewTypes[model.get('type')]) {
    return new ViewTypes[model.get('type')](model);
  }

  return null;
};

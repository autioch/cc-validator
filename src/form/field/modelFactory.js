const ModelsTypes = {
  bool: require('./bool/model'),
  creditCardNumber: require('./creditCardNumber/model'),
  cvvNumber: require('./cvvNumber/model'),
  date: require('./date/model'),
  email: require('./email/model')
};

module.exports = function modelFactory(fieldDefinition) {
  return new ModelsTypes[fieldDefinition.type](fieldDefinition);
};

const ModelsTypes = {
  bool: require('./bool/model'),
  creditCardNumber: require('./creditCardNumber/model'),
  cvvNumber: require('./cvvNumber/model'),
  date: require('./date/model'),
  email: require('./email/model')
};

const ViewTypes = {
  bool: require('./bool/view')

  // creditCardNumber: require('./creditCardNumber/view'),
  // cvvNumber: require('./cvvNumber/view'),
  // date: require('./date/view'),
  // email: require('./email/view')
};

module.exports = {
  modelFactory(fieldDefinition) {
    return new ModelsTypes[fieldDefinition.type](fieldDefinition);
  },
  viewFactory(model) {
    if (ViewTypes[model.get('type')]) {
      return new ViewTypes[model.get('type')](model);
    }

    return null;
  }
};

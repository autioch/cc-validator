module.exports = {
  config: {},
  fields: [{
    type: 'creditCardNumber',
    label: 'Credit card number'
  }, {
    type: 'date',
    label: 'Expiration date'
  }, {
    type: 'cvvNumber',
    label: 'CVV Number'
  }, {
    type: 'bool',
    label: 'Store the card',
    value: false
  }, {
    type: 'email',
    label: 'Email',
    visible: false
  }]
};

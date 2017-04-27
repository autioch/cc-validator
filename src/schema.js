const waitTime = 2000;

module.exports = {
  config: {},
  waitTime,
  successMessage: 'Success',
  fields: [{
    key: 'ccNumber',
    type: 'creditCardNumber',
    label: 'Credit card number'
  }, {
    key: 'exporationDate',
    type: 'date',
    label: 'Expiration date'
  }, {
    key: 'cvvNumber',
    type: 'cvvNumber',
    label: 'CVV Number'
  }, {
    key: 'storeCard',
    type: 'bool',
    label: 'Store the card',
    value: false
  }, {
    key: 'email',
    type: 'email',
    label: 'Email',
    visible: false
  }]
};

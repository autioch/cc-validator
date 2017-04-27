const waitTime = 2000;

module.exports = {
  config: {
    header: 'Please fill in the required fields.'
  },
  waitTime,
  successMessage: 'Success!',
  fields: [{
    key: 'ccNumber',
    type: 'creditCardNumber',
    label: 'Credit card number',
    value: ''
  }, {
    key: 'exporationDate',
    type: 'date',
    label: 'Expiration date',
    value: ''
  }, {
    key: 'cvvNumber',
    type: 'cvvNumber',
    label: 'CVV Number',
    value: ''
  }, {
    key: 'storeCard',
    type: 'bool',
    label: 'Store the card',
    value: false,
    required: false
  }, {
    key: 'userEmail',
    type: 'email',
    label: 'Email',
    visible: false,
    value: '',
    required: false
  }]
};

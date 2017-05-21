const waitTime = 2000;

module.exports = {
  config: {
    header: 'No data is stored. This is only validation.',
    submitLabel: 'Confirm validation'
  },
  waitTime,
  successMessage: 'Success!',
  fields: [{
    key: 'ccNumber',
    type: 'creditCardNumber',
    label: 'Credit card number',
    value: ''
  }, {
    key: 'expirationDate',
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
    label: 'Validate email',
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

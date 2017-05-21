/* eslint no-console: 0 */
const FormModel = require('../index');
const { config, fields } = require('../src/schema');

const formModel = new FormModel(config, fields);

formModel.on('change:valid', (formModel, valid) => {
  formModel.fields.forEach((fieldModel) => console.log(fieldModel.config.key, fieldModel.get('valid')));
  console.log(`FormModel is now ${valid ? '' : 'in'}valid.`);
});

/* Non-generic part of the application - lack of time. */
const userEmailModel = formModel.getField('userEmail');
const storeCardModel = formModel.getField('storeCard');

storeCardModel.on('change:value', (__, value) => {
  const storeCard = !!value;

  userEmailModel.set('visible', storeCard).set('required', storeCard);
});

/* Modyfing form values. */
formModel.setFieldValue('ccNumber', '1234567890123456');
formModel.setFieldValue('expirationDate', '2018-02-03');
formModel.setFieldValue('cvvNumber', '123');
formModel.setFieldValue('storeCard', true);
formModel.setFieldValue('userEmail', 'autioch@gmail.com');

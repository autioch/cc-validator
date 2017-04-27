const { config, fields } = require('schema');
const FormModel = require('form/model');

const formModel = new FormModel(config, fields);

console.log(formModel.fields.length);

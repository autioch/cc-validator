/* eslint no-console: 0 */
const AppModel = require('./model');
const AppView = require('./view');

const appModel = new AppModel();
const appView = new AppView(appModel);

const container = document.body;

/* Some quick tests. */

appModel.formModel.on('change:valid', (...params) => console.log(params));
appModel.formModel.set('valid', false);

appModel.formModel.fields[0].set('valid', false);
appModel.formModel.fields[0].set('valid', true);

appModel.formModel.save();

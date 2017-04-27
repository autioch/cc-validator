/* eslint no-console: 0 */
const AppModel = require('./model');
const AppView = require('./view');

const appModel = new AppModel();
const appView = new AppView(appModel);  // eslint-disable-line no-unused-vars

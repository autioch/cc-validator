const { merge } = require('utils');
const FieldModel = require('../model');

function EmailFieldModel(config = {}) {
  FieldModel.call(this, config);
  this.on('change:required', this.syncValid, this);
}

/* Naive checking */
const userRegex = /[a-zA-Z0-9+]+/;
const domainRegex = /[a-zA-Z0-9]+\.[a-z]{2,}/;

EmailFieldModel.prototype = merge(FieldModel.prototype, {
  constructor: EmailFieldModel,
  validate() {
    if (!this.get('required')) {
      return true;
    }

    /* No support for local emails. */
    const [user, domain] = this.get('value').trim().split('@');

    if (!user || !domain || !userRegex.test(user) || !domainRegex.test(domain)) {
      return false;
    }

    return true;
  }
});

module.exports = EmailFieldModel;

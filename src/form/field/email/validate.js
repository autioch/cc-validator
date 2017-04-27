/* Naive checking */
const userRegex = /[a-zA-Z0-9+]+/;
const domainRegex = /[a-zA-Z0-9]+\.[a-z]{2,}/;

module.exports = function validate(value) {
    /* No support for local emails. */
  const [user, domain] = value.trim().split('@');

  if (!user || !domain || !userRegex.test(user) || !domainRegex.test(domain)) {
    return false;
  }

  return true;
};

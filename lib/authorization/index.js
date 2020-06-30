const UnauthorizedError = require('./unauthorized-error');

function validate(user, policy, ability) {
  if (!Object.prototype.hasOwnProperty.call(policy, ability) || typeof policy[ability] !== 'function') {
    throw new Error('Unknown policy\'s ability');
  }

  return policy[ability](user);
}

function deny(msg) {
  throw new UnauthorizedError(msg);
}

module.exports = { validate, deny };
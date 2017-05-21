/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');
const validate = require('./validate');

const trueCases = [
  ''
];

const falseCases = [];

describe('CVV number validate', () => {
  it('is a function', () => {
    expect(typeof validate).to.equal('function');
  });

  it('accepts 1 parameter', () => {
    expect(validate.length).to.equal(1);
  });

  falseCases.forEach((falseCase) => {
    describe(`given false case '${falseCase}'`, () => {
      it('will return false', () => {
        expect(validate(falseCase)).to.equal(false);
      });
    });
  });

  trueCases.forEach((trueCase) => {
    describe(`given true case '${trueCase}'`, () => {
      it('will return false', () => {
        expect(validate(trueCase)).to.equal(true);
      });
    });
  });
});

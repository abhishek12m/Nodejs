// test/math.test.js
const chai = require('chai');
const math = require('../../src/math');

const expect = chai.expect;

describe('Math operations', () => {
  it('should add two numbers', () => {
    expect(math.add(1, 2)).to.equal(3);
  });

  it('should subtract two numbers', () => {
    expect(math.subtract(5, 3)).to.equal(2);
  });
});

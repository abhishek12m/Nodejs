const chai = require('chai');
const { expect } = chai;
const { add } = require('../../src/add');

describe('Unit Tests', () => {
    describe('add function', () => {
        it('should add two numbers correctly', () => {
            expect(add(1, 2)).to.equal(3);
        });

        it('should handle negative numbers', () => {
            expect(add(-1, -2)).to.equal(-3);
        });
    });
});

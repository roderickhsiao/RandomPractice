/* global describe, beforeEach, it */
'use strict';

var expect = require('chai').expect;
var bubbleSort;

describe('#Bubble Sort', () => {

    beforeEach(() => {
        bubbleSort = require('../../../javascript/algorithms/bubbleSort');
    });

    describe('Positive test cases', () => {
        it('should sort the given array', () => {
            var unsortedArray = [5, 1, 4, 2, 8];
            expect(bubbleSort(unsortedArray)).to.deep.equal([1, 2, 4, 5, 8]);
        });

        it('should sort the given array with same value', () => {
            var unsortedArray = [5, 1, 1, 2, 4, 2, 8];
            expect(bubbleSort(unsortedArray)).to.deep.equal([1, 1, 2, 2, 4, 5, 8]);
        });

        it('should be able to sort negative and 0', () => {
            var unsortedArray = [-5, 0, 1, 2, 4, 8];
            expect(bubbleSort(unsortedArray)).to.deep.equal([-5, 0, 1, 2, 4, 8]);
        });

        it('should be able to sort non-integer', () => {
            var unsortedArray = [1, 2, 4, 1.2, 8];
            expect(bubbleSort(unsortedArray)).to.deep.equal([1, 1.2, 2, 4, 8]);
        });
    });

    describe('Negative test cases', () => {
        it('should return null if input is incorrect', () => {
            var unsortedArray;
            expect(bubbleSort(unsortedArray)).to.deep.equal(null);
        });
    });
});

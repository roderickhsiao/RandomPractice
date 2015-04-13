/* global describe, beforeEach, it */
'use strict';

var expect = require('chai').expect;
var bubbleSort;

describe('#Bubble Sort', function() {

    beforeEach(function() {
        bubbleSort = require('../../../javascript/algorithms/bubble_sort');
    });

    describe('Positive test cases', function() {
        it('should sort the given array', function() {
            var unsortedArray = [5, 1, 4, 2, 8];
            expect(bubbleSort(unsortedArray)).to.deep.equal([1, 2, 4, 5, 8]);
        });
    });

    describe('Negative test cases', function() {
        it('should return null if input is incorrect', function() {
            var unsortedArray;
            expect(bubbleSort(unsortedArray)).to.deep.equal(null);
        });
    });
});

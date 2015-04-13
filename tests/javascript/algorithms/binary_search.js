/* global describe, beforeEach, it */
'use strict';

var expect = require('chai').expect;
var binarySearch;

describe('#Binary Search', function() {

    beforeEach(function() {
        binarySearch = require('../../../javascript/algorithms/binary_search');
    });

    describe('Positive test cases', function() {
        it('should return index if element found (small) - number', function() {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 1)).to.deep.equal(1);
        });

        it('should return index if element found (large) - number', function() {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 4)).to.deep.equal(4);
        });

        it('should return index if element found - string', function() {
            var sortedArray = ['0', '1', '2', '3', '4', '5'];
            expect(binarySearch(sortedArray, '4')).to.deep.equal(4);
        });
    });

    describe('Negative test cases', function() {
        it('should return -1 if element not found', function() {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 6)).to.deep.equal(-1);
        });
    });

});

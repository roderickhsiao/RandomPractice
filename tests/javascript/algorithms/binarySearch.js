/* global describe, it */

import {expect} from 'chai';
import binarySearch from '../../../javascript/algorithms/binarySearch';

describe('#Binary Search', () => {
    describe('Positive test cases', () => {
        it('should return index if element found (small) - number', () => {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 1)).to.deep.equal(1);
        });

        it('should return index if element found (large) - number', () => {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 4)).to.deep.equal(4);
        });

        it('should return index if element found - string', () => {
            var sortedArray = ['0', '1', '2', '3', '4', '5'];
            expect(binarySearch(sortedArray, '4')).to.deep.equal(4);
        });
    });

    describe('Negative test cases', () => {
        it('should return -1 if element not found', () => {
            var sortedArray = [0, 1, 2, 3, 4, 5];
            expect(binarySearch(sortedArray, 6)).to.deep.equal(-1);
        });

        it('should not mach if type is not equal', () => {
            var sortedArray = ['0', '1', '2', '3', '4', '5'];
            expect(binarySearch(sortedArray, 4)).to.deep.equal(-1);
        });
    });
});

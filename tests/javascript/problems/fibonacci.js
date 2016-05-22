/* global describe, it */

import {expect} from 'chai';
import getFibonacci from '../../../javascript/problems/fibonacci';
import getFibonacciDP from '../../../javascript/problems/fibonacciDP';

describe('#getFibonacci', () => {
    it('should fibonachi array', () => {
        expect(getFibonacci(20)).to.equal(6765);
        expect(getFibonacciDP(20)).to.equal(6765);
    });
});

/* global describe, it */

import {expect} from 'chai';
import flatten from '../../../javascript/problems/flattenArray';

describe('#flattenArray', () => {
    it('should flatten array', () => {
        var spec = [1, [2, [3, [4, [5], 6], 7], 8], 9];
        expect(flatten(spec)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

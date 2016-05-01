import {expect} from 'chai';

import productArray from '../../../javascript/problems/productArray';

describe('#productArray', () => {
    it('output correct answer', () => {
        var spec = [1,2,3,4];
        expect(productArray(spec)).to.deep.equal([24,12,8,6]);
    });
});

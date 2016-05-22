import {expect} from 'chai';

import sum from '../../../javascript/problems/currying';

describe('#curry', () => {
    it('return correct result', () => {
        expect(sum(2, 5)).to.equal(7);
        expect(sum(2)(5)).to.equal(7);
        // expect(sum(2)(3)(5)).to.equal(10);
    });
});

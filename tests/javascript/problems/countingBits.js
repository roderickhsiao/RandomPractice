import {expect} from 'chai';

import countBits from '../../../javascript/problems/countingBits';
import countBitsDp from '../../../javascript/problems/countingBitsDp';

describe('#countBits', () => {
    it.only('return correct result', () => {
        var spec = 5;
        expect(countBits(spec)).to.deep.equal([0,1,1,2,1,2]);
        expect(countBitsDp(spec)).to.deep.equal([0,1,1,2,1,2]);
    });
});

import {expect} from 'chai';

import singleNumber from '../../../javascript/problems/singleNumber';

describe('#singleNumber', () => {
    it('output currect number', () => {
        var spec = [1, 2, 1, 3, 2, 5];
        expect(singleNumber(spec)).to.deep.equal([3, 5]);
    });
});

import {expect} from 'chai';

import topFrequent from '../../../javascript/problems/topFrequent';

describe('#topFrequent', () => {
    it('return top k frequent', () => {
        var spec = [1, 1, 1, 2, 2, 3];
        expect(topFrequent(spec, 2)).to.deep.equal([1, 2]);
        spec = [4, 1, -1, 2, -1, 2, 3];
        expect(topFrequent(spec, 2)).to.deep.equal([-1, 2]);
    });
});

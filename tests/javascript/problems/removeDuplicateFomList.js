import {expect} from 'chai';

import deleteDuplicates from '../../../javascript/problems/removeDuplicateFomList';

var createNode = (arr) => {
    return
};
describe('#deleteDuplicates', () => {
    it('delete duplicate number from list', () => {
        var spec = { val: 1, next: { val: 1, next: null } };
        expect(deleteDuplicates(spec)).to.deep.equal({ val: 1, next: null });
    });
});

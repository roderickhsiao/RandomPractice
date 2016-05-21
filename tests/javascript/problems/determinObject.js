import {expect} from 'chai';
import isObject from '../../../javascript/problems/determinObject';

describe('#determineObject', () => {
    it('check is object', () => {
        expect(isObject({a: 'foo'})).to.equal(true);
        expect(isObject(() => {})).to.equal(true);

        expect(isObject('')).to.equal(false);
        expect(isObject(['a', 'b', 'c'])).to.equal(false);
        expect(isObject(null)).to.equal(false);
    });
});

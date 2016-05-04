import {expect} from 'chai';

import wordPattern from '../../../javascript/problems/wordPattern';

describe('#wordPattern', () => {
    it('return correct result', () => {
        var pattern = 'abba';
        var str = 'dog cat cat dog';
        expect(wordPattern(pattern, str)).to.equal(true);
        pattern = 'abba';
        str = 'dog dog dog dog';
        expect(wordPattern(pattern, str)).to.equal(false);
    });
});

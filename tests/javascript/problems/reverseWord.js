/* global describe, it */

import {expect} from 'chai';
import reverseWord from '../../../javascript/problems/reverseWord';
import reverseWordSwap from '../../../javascript/problems/reverseWordSwap';

describe('#reverseWord', () => {
    it('should reverse word order', () => {
        var spec = 'find you will pain only go you recordings security the into if';
        expect(reverseWord(spec)).to.equal('if into the security recordings you go only pain will you find');
        expect(reverseWordSwap(spec)).to.equal('if into the security recordings you go only pain will you find');
    });
});

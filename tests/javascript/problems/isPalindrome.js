import {expect} from 'chai';
import isPalindrome from '../../../javascript/problems/isPalindrome';

describe('#isPalindrome', () => {
    it('check is Palindrome', () => {
        expect(isPalindrome('A but tuba')).to.equal(true);
        expect(isPalindrome('Al lets Della call Ed Stella')).to.equal(true);

        expect(isPalindrome('')).to.equal(false);
        expect(isPalindrome('apple')).to.equal(false);
    });
});

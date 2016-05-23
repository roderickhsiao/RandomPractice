/* global describe, it */
'use strict';

import {expect} from 'chai';
import isValid from '../../../javascript/algorithms/luhn';

describe('#Bubble Sort', () => {
    describe('Positive test cases', () => {
        it.only('should validate correct number', () => {
            expect(isValid(79927398710)).to.equal(false);
            expect(isValid(79927398713)).to.equal(true);
        });
    });
});

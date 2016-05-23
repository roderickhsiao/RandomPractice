/* global describe, beforeEach, it */
'use strict';

var expect = require('chai').expect;
var inheritance;

describe('#Inheritance', () => {
    beforeEach(() => {
        inheritance = require('../../../javascript/basic/inheritance');
    });

    describe('Basic object check', () => {
        it('should have basic object setup (parent)', () => {
            var parent = new inheritance.Animal('Animal');
            expect(parent.saySomething()).to.equal('Say something');
            expect(parent.eatSomething()).to.equal('I am eating');
            expect(parent.name).to.equal('Animal');
            expect(parent.tails).to.equal(null);
            expect(parent.legs).to.equal(null);

        });

        it('dog should inherit from animal', () => {
            var dog = new inheritance.Dog('Dog');
            expect(dog.saySomething()).to.equal('Bark');
            expect(dog.eatSomething()).to.equal('I am eating');
            expect(dog.name).to.equal('Dog');
            expect(dog.tails).to.equal(1);
            expect(dog.legs).to.equal(4);
        });
    });
});

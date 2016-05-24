import {expect} from 'chai';

import linkedList from '../../../javascript/data-structures/linkedList';

describe('#linkedList', () => {
    it('#add and get', () => {
        var LinkedList = new linkedList();
        for (var i = 0, j = 10; i <= j; i++) {
            LinkedList.add(i);
        }
        // get
        expect(LinkedList.get(10)).to.equal(10);
        expect(LinkedList.get(5)).to.equal(5);
        expect(LinkedList.get(100)).to.equal(null);
        expect(LinkedList.size()).to.equal(11);

    });
    it('#add remove and get', () => {
        var LinkedList = new linkedList();
        for (var i = 0, j = 10; i <= j; i++) {
            LinkedList.add(i);
        }
        // get
        expect(LinkedList.get(10)).to.equal(10);
        expect(LinkedList.get(5)).to.equal(5);
        // remove
        LinkedList.remove(5);
        expect(LinkedList.get(5)).to.equal(6);
        expect(LinkedList.size()).to.equal(10);
    });
});

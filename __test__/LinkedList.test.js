'use strict';

const LinkedList = require('../LinkedList');


describe('LinkedList class testing', () => {

    it('Creating instance testing', () => {

        const linkedList = new LinkedList();

        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });

});

describe('Testing LinkedList insert method', () => {

    it('If linkedList is empty', () => {

        const linkedList = new LinkedList();

        linkedList.insert('a');
        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next).toBeNull();
    });

    it('If linkedList is not empty', () => {

        const linkedList = new LinkedList();

        linkedList.insert('a');
        linkedList.insert('b');
        linkedList.insert('c');
        expect(linkedList.head.value).toEqual('c');
        expect(linkedList.head.next.value).toEqual('b');

    });

});

describe('Testing LinkedList append method', () => {

    it('If linkedList is empty', () => {

        const linkedList = new LinkedList();

        linkedList.append('a');
        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next).toBeNull();

    });

    it('If linkedList is not empty', () => {

        const linkedList = new LinkedList();

        linkedList.append('a');
        linkedList.append('b');
        linkedList.append('c');
        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next.value).toEqual('b');
        expect(linkedList.head.next.next.next).toBeNull();

    });

});

describe('Testing LinkedList nodesNumber method', () => {

    it('If linkedList is empty', () => {

        const linkedList = new LinkedList();

        expect(linkedList.nodesNumber()).toEqual(0);

    });

    it('If linkedList is not empty', () => {

        const linkedList = new LinkedList();
        const ll = new LinkedList();

        linkedList.append('a');
        linkedList.append('b');
        linkedList.append('c');
        ll.append('a');

        expect(ll.nodesNumber()).toEqual(1);
        expect(linkedList.nodesNumber()).toEqual(3);

    });
});

describe('Testing LinkedList delete method', () => {

    it('If linkedList is not empty', () => {

        const linkedList = new LinkedList();

        linkedList.append('a');
        linkedList.append('b');
        linkedList.append('c');
        linkedList.append('d');
        linkedList.append('e');

        linkedList.delete();

        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next.value).toEqual('b');
        expect(linkedList.head.next.next.value).toEqual('d');

    });
});

describe('Testing LinkedList insertAt method', () => {

    it('If linkedList is not empty', () => {

        const linkedList = new LinkedList();

        linkedList.append('a');
        linkedList.append('b');
        linkedList.append('c');
        linkedList.append('d');

        linkedList.insertAt(2,'2');

        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next.value).toEqual('2');
        expect(linkedList.head.next.next.value).toEqual('b');




    });
});
'use strict';

const Node = require('../Node');


describe('Node class testing',()=>{

    it('Creating instance testing',()=>{

        const value = 'any type of data';
        const node = new Node(value);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })

});

'use strict';

const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null
    }

    insert(value) {

        if (this.head) {

            const node = new Node(value);
            node.next = this.head;
            this.head = node;

        } else {

            const node = new Node(value);
            this.head = node;
            
        }

    }

    insertAt(place, value) {

        if (place > this.nodesNumber()) {
          console.log('the place is more than the nodes');
          return 'the place is more than the nodes'
        } else {
          if (this.head) {
            let i = 1;
            let target = this.head;
            while (i < place) {
              target = target.next;
              i++;
            }
            const node = new Node(value);
            node.next = target;
            let newTarget = this.head;
            let k = 1
            while (k < place-1) {
              newTarget = newTarget.next;
              k++;
            }
            newTarget.next = node ;
    
          } else {
            const node = new Node(value);
            this.head = node;
          }
        }
    }

    append(value) {

        if (this.head) {

            const node = new Node(value);
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            };
            currentNode.next = node;

        } else {

            const node = new Node(value);
            this.head = node;
            
        }

    }

    nodesNumber() {
        let head = this.head;
        let num = 1;
        if (head === null) {
          return (0);
        } else {
          while (head.next) {
            head = head.next;
            num++;
          }
          return (num);
        }
      }

    delete() {

        if(this.head) {

            
            let base =  this.head;
            let nodesNumber = 1;
            while(base.next) {
                nodesNumber++;
                base = base.next;
            }
            console.log(nodesNumber);


            let center = Math.ceil(nodesNumber/2);
            let target = this.head;
            for( let i=1 ; i<center-1 ; i++) {
                target = target.next;
            }
            console.log('target',target);
            console.log(target.next.next);
            target.next = target.next.next;
            
        }else {
            console.log('the list is empty');
        }
    }

}





module.exports = LinkedList;
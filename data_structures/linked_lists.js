/*

A linked list is made up of nodes and a node contains it's own value and a "pointer" value that tells the location of the next node.

Single linked list- only knows beginning of list
Doubly linked list- knows beginning and end(tail) of list 

Pros- Less cost to add/remove elements at beginning of list compared to arrays
Cons- More cost to add/remove elements at end of list compared to arrays (can be allieviated with doubly linked list)
*/

// Linked list using classes
class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //CRUD functions

    add(data) {
        let newNode = new Node(data)
        let currentNode

        if (this.head === null) {
            this.head = newNode
        } else {
            currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }  
            currentNode.next = newNode  
        }
        this.size ++
    }

    //node information functions
    nodeAt(index) { // return node at index position given
        let node = this.head
        if (index > this.size) return false
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node;
    }

}

//let node1 = new Node("a")
let list = new LinkedList()
//console.log(node1, list)
list.add("b")
list.add("c")
list.add("d")
console.log(list, list.nodeAt(4))

// Current example creates a linked list by using arrays as nodes stored in an object.
let firstNode = ['cameron', 123]
let secondNode = ['sloane', 132]
let thirdNode = ['ferris', null]

let collection = {0: firstNode, 123: secondNode, 132: thirdNode}
let head = collection[0];

function next(node){
    let nextAddress = node[1] 
    return collection[nextAddress]
}

function indexAt(head, index){
    let node = head;
    for(i = 0; i < index; i++){
        node = next(node);
    }
    return node;
}

function insertAfter(node, newnode){

}
// add crud functions
//console.log(next(firstNode))
//console.log(next(thirdNode))
//console.log(indexAt(head, 2))
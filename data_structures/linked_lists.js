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

    addAt(data, index) {
        if (index > 0 && index > this.size){ 
            return false
        } else {
            let newNode = new Node(data)
            let previousNode, nextNode

            switch(index){
                case 0:
                    newNode.next = this.head
                    this.head = newNode
                    //console.log(this.head, this.head.next)
                default:
                    previousNode = this.nodeAt(index - 1)
                    nextNode = previousNode.next
                    previousNode.next = newNode
                    newNode.next = nextNode
                    //console.log(previousNode, newNode, nextNode)
            }
            this.size ++
        }
    }

    updateNode(index, newData){ //update a node at index with new data 
        let node = this.nodeAt(index)
        node.data = newData
        console.log(node)
    }

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
//console.log(list)
//list.addAt(1, 3)
//list.updateNode(1, "thisistesttext")
//console.log(list.nodeAt(0), list.nodeAt(1), list.nodeAt(2), list.nodeAt(3))
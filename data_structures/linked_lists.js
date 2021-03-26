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

    //Create
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

    //Read
    nodeAt(index) { // return node at index position given
        let node = this.head
        if (index > this.size) return false
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node;
    }

    indexFor(data){ // returns index position for data given
        let index = 0
        let currentNode = this.head
        while (currentNode != null) {
            if (currentNode.data === data)
                return index;
            index++;
            currentNode = currentNode.next;
        }
        return -1
    }

    //Update
    updateNode(index, newData){ //update a node at index with new data 
        let node = this.nodeAt(index)
        node.data = newData
        console.log(node)
    }

    //Destroy
    removeFrom(index) { // removes node at index
        if (index > 0 && index > this.size){ 
            return -1
        } else {
            let removeNode, previousNode
            if(index === 0){
                //console.log(this.head)
                this.head = this.head.next
                //console.log(this.head)
            } else {
                previousNode = this.nodeAt(index -1)
                //console.log(previousNode)
                removeNode = previousNode.next
                previousNode.next = removeNode.next
                //console.log(previousNode)
            }    
            this.size --
        }
    }

    removeData(data){ // removes node using data
        let currentNode = this.head
        let previousNode = null
        while(currentNode != null) {
            if (currentNode.data === data) {
                if (previousNode == null) {
                    //console.log(this.head)
                    this.head = currentNode.next
                    //console.log(this.head)
                } else {
                    //console.log(previousNode, "--------")
                    previousNode.next = currentNode.next
                    //console.log(previousNode)
                }
                this.size --
                return currentNode.data
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }
        return -1
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
//list.removeFrom(0)
//list.removeFrom(1)
//list.removeData("b")
//list.removeData("c")
//list.removeData("d")
//console.log(list.indexFor("b"), list.indexFor("c"), list.indexFor("d"))
//console.log(list.nodeAt(0), list.nodeAt(1), list.nodeAt(2), list.nodeAt(3))
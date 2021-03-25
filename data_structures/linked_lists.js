/*

A linked list is made up of nodes and a node contains it's own value and a "pointer" value that tells the location of the next node.

Single linked list- only knows beginning of list
Doubly linked list- knows beginning and end(tail) of list 

Pros- Less cost to add/remove elements at beginning of list compared to arrays
Cons- More cost to add/remove elements at end of list compared to arrays (can be allieviated with doubly linked list)

Current example creates a linked list by using arrays as nodes stored in an object.
*/

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
console.log(next(firstNode))
console.log(next(thirdNode))
console.log(indexAt(head, 2))
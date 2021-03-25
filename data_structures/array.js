/*

CRUD - Create, Read, Update, Destroy

Arrays use index[0, 1, 2, ... n]

Contiguous data structure- array stored in block of memory next to each other
When an array can contain multiple data types, the array stores pointers to it's respective value
Pros- retrieving values easy
Cons- certain operations "cost" more than desired

Non-contiguous structures use a pointer to the next block of memory to find the next value which is slower

Time complexity for operations
Big O(n) = unshift(), shift(), push()
Big O(1) = pop(), array[n]

*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, "abc"]

// Delete
let lastOut = array.pop() // removes last
console.log(array, lastOut)
let firstOut = array.shift() // removes first
console.log(array, firstOut)

// Create
let firstIn = array.unshift(0) // inserts at beginning
console.log(array)
let lastIn = array.push("def") // inserts at end
console.log(array)

// Read
console.log(array[0])

// Update
array[0] = "zero" 
console.log(array)
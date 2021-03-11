var minimumBoxes = function(n) {
    let [minBoxes, minTotal] = getValues(n)
    //console.log(n)
    //console.log(minBoxes, minTotal) 
    // minBoxes represents the minimum amount of boxes that have to be on the floor -1
    // this value is the starting point, like 0 would be, that we keep adding 1 until we get the result
    let result = minBoxes
    
    if (n === 1) {
        return 1
    }
    
    // actions represent how many blocks are left to add to the new layer (1 box = 1 layer, 4 boxes = 2 layers, 10 = 3 layers)
    // due to the fact that not every block added touches the floor there's a variable(wait) to account for when a block isn't 
    // placed on the floor
    let actions = (n - minTotal)
    // wait represents the number of actions that don't add a block to the floor, we use that value to "skip" those actions dynamically
    let wait

    while (actions > 0) { // while there are blocks that need to be placed
        // if there are any blocks that won't be placed on the floor we "place"/wait those first
        if (!!wait || wait === 0) {
            actions -= wait
            wait += 1
        } else if (!wait) { // first time placing block we wait 0 times
            wait = 0
        } 

        if (actions > 0) { // only update result if there are any actions left
            result += 1
            actions -= 1 
        }
        //console.log(result, wait, actions)
        //console.log("--------")
    }
    //result = result + actions
    return result
};

function calculateFOfX(x) {
    // f(x) = f(x-1) + x + 1 where f(-1) = 0
    let currentBoxesOnFloor
    let total = 0
    for (let i = 0; i < (x+1); i++) {
        if (i === 0) {
            currentBoxesOnFloor = 1
        } else {
            currentBoxesOnFloor += i + 1
        }
        total += currentBoxesOnFloor
    }
    return [currentBoxesOnFloor, total]
}

function getValues(n) {
    let maxTotal = 0
    let maxBoxes = 0
    let i
    for (i = 0; maxTotal < n; i++) {
        [maxBoxes, maxTotal] = calculateFOfX(i)
    }
    let [minBoxes, minTotal] = calculateFOfX(i-2)
    return [minBoxes, minTotal]
}

console.log(minimumBoxes(3))
console.log("--------")
console.log(minimumBoxes(1))
console.log("--------")
console.log(minimumBoxes(10))
console.log("--------")
console.log(minimumBoxes(13))


/*
I had to figure out a pattern and make a math function f(x) out of how does the total number of blocks change each *full* level placed
1   3   6   10   15
  v   v   v    v
 +2  +3  +4   +5

f(x) = f(x-1) + x + 1 where f(-1) = 0
f(0) = 1, f(1) = 3, f(2) = 6, f(3) = 10, f(4) = 15
1 = 1 "1 block touching floor and 1 level"
1 3 = 4 "3 blocks touching floor and 2 levels"
1 3 6 = 10 "6 blocks touching floor and 3 levels"
1 3 6 10 = 20 "10 blocks touching floor and 4 levels"
1 3 6 10 15 = 35 "15 blocks touching floor and 5 levels"

            20(+0)  
        16(+0) 19(+0)
    13(+0) 15(+0) 18(+0)
11(+1) 12(+1) 14(+1) 17(+1) 
*/
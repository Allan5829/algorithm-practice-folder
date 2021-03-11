var minimumBoxes = function(n) {
    console.log(n)
    let [maxBoxes, maxTotal, minBoxes, minTotal] = getValues(n)
    console.log(maxBoxes, maxTotal, minBoxes, minTotal)

    if (n >= maxTotal) {
        return maxBoxes
    } else {
        return ( (n - minTotal) + minBoxes )
    }
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
    return [maxBoxes, maxTotal, minBoxes, minTotal]
}

console.log(minimumBoxes(3))
console.log("--------")
console.log(minimumBoxes(4))
console.log("--------")
console.log(minimumBoxes(10))
console.log("--------")
console.log(minimumBoxes(15))


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

If n is greater than "current boxes" add another level until "cb" >= to n
            20(+0)  
        16(+0) 19(+0)
    13(+0) 15(+0) 18(+0)
11(+1) 12(+1) 14(+1) 17(+1) 
*/
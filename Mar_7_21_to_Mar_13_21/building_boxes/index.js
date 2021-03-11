var minimumBoxes = function(n) {
    addLevel(0, 1, n)
};

function addLevel(currentLevel, currentNumber, target) {
    let newSum = 1
    let previousValue, nextBlocksOnFloor
    while (target > newSum) {
        console.log("current value=", newSum)
        previousValue = newSum
        currentLevel++
        currentNumber += currentLevel + 1
        newSum = currentNumber + previousValue
        console.log(currentNumber, newSum)
    }
    nextBlocksOnFloor = currentLevel + 1 // if nextBlocksOnFloor + currentNumber + 1 > target then number of blocks placed are only on the floor
    console.log(nextBlocksOnFloor, currentNumber, newSum)
}

minimumBoxes(12);

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

*/
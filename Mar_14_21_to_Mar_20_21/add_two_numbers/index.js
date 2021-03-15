const addTwoNumbers = function(l1, l2) {
    let [ result, carry, longestNum] = [ [], 0, longestLength(l1.length, l2.length)]
    let [x, y, sum] = [0, 0, 0]
    for (let i = 0; i < longestNum; i++) {
        x = numValue(l1[i])
        y = numValue(l2[i])
        //console.log(x, y)
    }
    console.log(result)
    return result
};

const numValue = function(x) {
    return (x && x > -1)? x : 0 // if value exists and is greater then -1 return it else return 0
}

const longestLength = function(x, y) { // determine if a longer length exists and return it
    if (x === y) {
        return x
    } else if ( x > y) {
        return x 
    } else {
        return y
    }
}

let [l1, l2] = [ [9,9,9,9,9,9,9], [9,9,9,9] ]
// 
if (addTwoNumbers(l1, l2) !== [8,9,9,9,0,0,0,1] ) console.log("false")
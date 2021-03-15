const addTwoNumbers = function(l1, l2) {
    let [ result, carryNum, carry, longestNum] = [ [], 0, false, longestLength(l1.length, l2.length)]
    let [x, y, sum] = [0, 0, 0]
    for (let i = 0; i < longestNum; i++) {
        x = numValue(l1[i])
        y = numValue(l2[i])
        carry? sum = x + y + carryNum : sum = x + y
        if ( sum < 10 ) {
            carry = false
            result.push(sum)
        } else {
            sum = twoDigits(sum)
            carryNum = sum[0]
            carry = true
            result.push(sum[1])
            i === (longestNum - 1)? result.push(carryNum) : null
        }
        //console.log(x, y)
    }
    console.log(result)
    return result
};

const twoDigits = function(sum) {
    return sum.toString().split('').map( n => { return parseInt(n, 10)})
}

const numValue = function(n) {
    return (n && n > -1)? n : 0 // if value exists and is greater then -1 return it else return 0
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
// [8,9,9,9,0,0,0,1]
addTwoNumbers(l1, l2)
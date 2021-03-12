var countSmaller = function(nums) {
    let result = []

    for (let i = 0; i < nums.length; nums.shift()) {
        if (nums.length === 0) {
            result.push(0)
        } else {
            let counts = 0
            let copyNums = nums.slice(1)
            copyNums.forEach( x => {
                nums[0] > x ? counts++ : null
            })
            result.push(counts)
        }
    }
    return result
};

console.log(countSmaller([5,2,6,1]))
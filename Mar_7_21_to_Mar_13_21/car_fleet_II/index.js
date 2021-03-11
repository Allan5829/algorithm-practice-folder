var getCollisionTimes = function(cars) {
    let result = []

    for (let i = 0; i < cars.length; i++) {
        if (i === cars.length - 1) {
            result.push(-1) // when last car
        } else if (cars[i][1] < cars[i+1][1]) {
            result.push(-1) // when next car is faster than current car
        } else {
            //loop?
        }
    }

    console.log(result)
    return result
};

getCollisionTimes([[1,2],[2,1],[4,3],[7,2]])

/*
Input: cars = [[1,2],[2,1],[4,3],[7,2]]
Output: [1.00000,-1.00000,3.00000,-1.00000]

Input: cars = [[3,4],[5,4],[6,3],[9,1]]
Output: [2.00000,1.00000,1.50000,-1.00000]
*/
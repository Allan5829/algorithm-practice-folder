var getCollisionTimes = function(cars) {
    let result = []

    for (let i = 0; i < cars.length; i++) {
        if (i === cars.length - 1) {
            result.push(-1.00000) // when last car
        } else if (cars[i][1] < cars[i+1][1]) {
            result.push(-1.00000) // when next car is faster than current car
        } else {
            //console.log(cars[i], cars[i+1])
            let currentCar = cars[i][0]
            let nextCar = cars[i+1][0]
            let time
            for (time = 0.00001; currentCar < nextCar; time+= 0.00001) {
                currentCar = cars[i][0]
                nextCar = cars[i+1][0]
                currentCar += parseFloat((cars[i][1] * time).toFixed(5))
                nextCar += parseFloat((cars[i+1][1] * time).toFixed(5))
                //console.log(currentCar, nextCar)
            }
            result.push(parseFloat((time).toFixed(5)))
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
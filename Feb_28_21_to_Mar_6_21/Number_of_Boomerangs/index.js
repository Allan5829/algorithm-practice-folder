function countBoomerangs(arr) {
    let result
    for (result = 0; arr.length > 2; arr.shift()) {
        arr[0] === arr[2] && arr[0] !== arr[1] ? result++ : null
    }
    console.log(result)
    return result
}

countBoomerangs([1, 7, 1, 7, 1, 7, 1]) //5
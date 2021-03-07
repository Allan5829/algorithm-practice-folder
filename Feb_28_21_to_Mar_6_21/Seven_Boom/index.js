function sevenBoom(arr) {
	let stringArray = arr.reduce( (a, b) => a.toString() + b.toString() ).split('')
    let decending = stringArray.sort( (a, b) => { return a > 7 ? a - b : b - a  })
    console.log(decending)
    return decending[0] === '7' ? "Boom!" : "there is no 7 in the array"
}

sevenBoom([76, 55, 493456789, 32])
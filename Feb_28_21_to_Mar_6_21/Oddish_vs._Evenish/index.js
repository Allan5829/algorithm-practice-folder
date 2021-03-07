function oddishOrEvenish(num) {
    let array = num.toString().split('') // Turn array into string and then split each character into an array
    let sum = array.reduce( (a, b) => parseInt(a, 10) + parseInt(b, 10) ) // reduce the array of values into a sum and turn each string 
        // into an integer
    //console.log(sum % 2 === 1 ? 'Oddish' : 'Evenish')
    return sum % 2 === 1 ? 'Oddish' : 'Evenish'
}

oddishOrEvenish(43)
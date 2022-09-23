const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an array: '))

let lastArray = getArray.length-1
//declared lastArray to equal the last index in getArray
console.log(getArray[lastArray])
//called LastArray in parameters to get last incex of getArray
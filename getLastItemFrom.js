const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an array: '))

let lastArray = getArray.length-1

console.log(getArray[lastArray])
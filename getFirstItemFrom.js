const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an array: '))

let firstItem = getArray[0];
// added variable to log first index in the array 'getArray'
console.log(firstItem)
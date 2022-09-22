const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an Array: '))

let firstIndex = getArray[0]



console.log( !isNaN(firstIndex)) 
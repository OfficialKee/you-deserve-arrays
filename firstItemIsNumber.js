const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an Array: '))

let firstIndex = getArray[0]



console.log( !isNaN(firstIndex)) 
// added the isNaN property to check if value is not a number, the exclamation point reverses that property, and check to see if it is a number.
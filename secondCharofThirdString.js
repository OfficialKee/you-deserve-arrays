const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an array: '))
//JSON.parse allows for entry of an array
if (typeof getArray[2][1] === 'string'){
    console.log(getArray[2][1])
}else{
    console.log('ERROR')
}//check for string type in 2nd character of 3rd string, if it was a string, log it. if its not a string type, log error.
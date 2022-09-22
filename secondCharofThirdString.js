const prompt = require('prompt-sync')({sigint: true})

let getArray = JSON.parse(prompt('Enter an array: '))

if (typeof getArray[2][1] === 'string'){
    console.log(getArray[2][1])
}else[
    console.log('ERROR')
]

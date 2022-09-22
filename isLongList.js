const prompt = require('prompt-sync')({sigint: true});

let longList = JSON.parse(prompt('Enter an Array: '));


console.log(longList.length >= 10)
  

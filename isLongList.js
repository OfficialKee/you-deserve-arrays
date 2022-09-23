const prompt = require('prompt-sync')({sigint: true});

let longList = JSON.parse(prompt('Enter an Array: '));


console.log(longList.length >= 10)
 //the  .length property checks to see if the Array is greater than or = 10 

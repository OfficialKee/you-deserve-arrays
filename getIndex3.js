const prompt = require('prompt-sync')({sigint: true});

let getArray = JSON.parse(prompt('Enter an array: '));


let names3 = getArray[3];
//let names3 = index3 in 'getArray'
let lastN =  getArray.length-1;
//let lastN = last index in getArray
//if thhe length of get array is more than 3, log index 3,else log last index.
if(getArray.length >= names3){
    console.log(names3);
}else{
    console.log(getArray[lastN]);
}
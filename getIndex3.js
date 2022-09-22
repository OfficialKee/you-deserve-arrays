const prompt = require('prompt-sync')({sigint: true});

let getArray = JSON.parse(prompt('Enter an array: '));


let names3 = getArray[3];
let lastN =  getArray.length-1;

if(getArray.length >= names3){
    console.log(names3);
}else{
    console.log(getArray[lastN]);
}
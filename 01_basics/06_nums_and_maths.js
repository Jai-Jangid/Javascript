const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const othernumber = 123.6545
// console.log(othernumber.toPrecision(4));


const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-In'));


// **************************Maths*****************************
/*
console.log(Math);
console.log(Math.abs(-4));  // used to make negative into positive only

console.log(Math.round(5.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,6,7,1));
console.log(Math.max(4,2,6,7,1));

*/

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
// to avoid the stuation of 0.0876543456 type random number which can be zero ,we always use +1 

// if you dont want decimals and want to roundoff the value then you can use math.floor wit it like-
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
const userEmail = "j@i.ai"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

/*
falsy values ->

false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy value ->

"0", 'false', " ", [], {}, function(){}

*/

// this is hoe to check array
const myarray = []

if(myarray.length === 0){
    console.log("Array is empty");
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

/*
// Nullish Coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

*/

/*

// terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");

*/

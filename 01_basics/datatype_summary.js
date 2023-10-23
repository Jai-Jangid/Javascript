//  primitive

// 7 types => String, Number, Boolean, null, undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 8765432345678n


// Reference (Non primitive)

// Array, Objects, Functions

const heros =["naagraj", "shaktimaan", "doga"]

let myobj ={
    name: "jai",
    age: 22,
}

const myfunction = function() {
    console.log("hello world");
}

console.log(typeof anotherId);

// link to read about return type of datatype:- https://262.ecma-international.org/5.1/#sec-11.4.3



// ************************************************************************

// Memory

// Stack(use with primitive) and Heap(use with non primitive) memory

let myyoutubename = "jaijangid"

let anothername = myyoutubename
anothername = "rockstar"

console.log(myyoutubename);
console.log(anothername);

let userone = {
    email: "jai@gmail.com",
    upi: "jai@ybl"
}

let usertwo = userone

usertwo.email = "jai@google.com"

// in heap memory we we get a reference ,you can say that we edit in the original value whereas in stack memory we get a copy of the value and we edit that copy value 

console.log(userone.email);
console.log(usertwo.email);
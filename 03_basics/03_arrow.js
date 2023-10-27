const user = {
    username: "jai",
    price: 999,
    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "rahul"
// user.welcomemessage()


// console.log(this);
/*
function chai(){
    let username = " jai"
    console.log(this.username);
}

chai()

*/
/*
const chai = function(){
    let username = "jai"
    console.log(this.username);
}
chai()
*/
/*
const chai = () => {
    let username = "jai"
    console.log(this);
}

chai()
*/

// //basic arrow function=>
// // explicit return (when you use paranthises'{}')
// const addtwo = (num1, num2) => {
//     return num1+num2
// }

//implicit return=>
// const addtwo = (num1, num2) =>  num1+num2
// const addtwo = (num1, num2) =>  (num1+num2)
// if you use '{}' paranthises then you have to write return but if you are using '()' then you dont have to write return like implicit return shown above 

const addtwo = (num1, num2) =>  ({username: "jai"})

console.log(addtwo(3,4));


const myarray = [2,3,4,65,6]

// myarray.forEach()
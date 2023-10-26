
function saymyname(){
    console.log("r");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");

}

// saymyname()      // calling a function

/*
function addtwonumbers(number1, number2){

    console.log( number1 + number2 );
}
*/

function addtwonumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // ***********OR**********

    return number1 + number2

}
const result = addtwonumbers(3, 5)

// console.log("result : ", result);


function loginusermessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("rahul"));
console.log(loginusermessage());
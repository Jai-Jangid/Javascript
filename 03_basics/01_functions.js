
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
// console.log(loginusermessage());


function calculatecartprice(val1,val2,...num1){
        return num1
}

// console.log(calculatecartprice(200, 300, 400,50000));


const user = {
    username: "jai",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 1923
})

const mynewarray = [200,300,400,110]

function retrunsecondvalue(getArray){
    return getArray[1]
}

console.log(retrunsecondvalue(mynewarray));
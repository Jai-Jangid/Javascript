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
*/

chai()
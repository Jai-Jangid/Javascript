// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log(a);     //it will act as 10 inside the block but outside the block the value is 300
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "jai"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);   // will not work because website scope is not here

    two()
}

// one()

if(true){
    const username = "jai"
    if(username === "jai"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);    // will not work
}
// console.log(username);   // will not work

//**************intersting*****************

console.log(addone(5))
function addone(num){
    return num+1
    
}

/*
// other way to make function
//  you cannot use function call before the declartion in this function because in here a variable hold the value 
addtwo(5)
const addtwo = function(num){
    return num+2
}

*/
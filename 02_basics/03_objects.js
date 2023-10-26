// singleton
// Object.create


// onject literals
// objects:- in object you can also define the key with the value  as shown below

const mysym = Symbol("key1")

const jsuser = {
    name : "jai",
    "full name" : "jai jangid",
    [mysym] : "mykey1",
    age: 18,
    location: "jaipur",
    email: "jai@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])


jsuser.email = "jai123@gmail.com"
// Object.freeze(jsuser)   // freeze method is used to freeze the email ,it wont allowed anyone to change it after applying freeze method
// jsuser.email = "jaiTCS@gmail.com"
// console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());
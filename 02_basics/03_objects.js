// singleton
// Object.create


// onject literals
// objects:- in object you can also define the key with the value  as shown below

const mysym = Symbol("key1")

const jsuser = {
    name : "jai",
    "full name" : "jai jangid",
    mysym : "mykey1"
    age: 18,
    location: "jaipur",
    email: "jai@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(typeof jsuser.mysym)


myarray = ["j","a"]
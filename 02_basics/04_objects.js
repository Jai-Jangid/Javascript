// const tinderuser = new Object()      //this is singlton object
const tinderuser = {}

tinderuser.id = "124abc"
tinderuser.name = "jai"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
             firstname: "jai",
             lastname: "chaudhray"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users= [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },

]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));



// destructuring

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// JSON 
/*
{
    "name": "jai",
    "coursename": " js in hindi",
    "price": "free"
}
*/

[
    {},
    {},
    {}
]
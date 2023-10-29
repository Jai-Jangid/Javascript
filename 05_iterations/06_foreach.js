const coding = ['js','ruby', 'java', 'python','cpp']
/*
const values = coding.forEach((item) => {
    console.log(item);
    return item
});

console.log(values);

*/

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const newnums = mynums.filter((num)=> {
   
    return num>4        // if you are not using '{}' in arrow function then you dont need to write 'return' keyword but if you are using it than you have to write return keyword
})
console.log(newnums);
*/

const newnums = []

mynums.forEach((num)=>{
    if(num > 4){
        newnums.push(num)
    }
})
// console.log(newnums);



const books = [
    {title: "book1" , genre:"history", publish: 1986, edition: 2008},
    {title: "book2" , genre:"fiction", publish: 2007, edition: 2010},
    {title: "book3" , genre:"non-fiction", publish: 1989, edition: 2002},
    {title: "book4" , genre:"history", publish: 1996, edition: 2009},
    {title: "book5" , genre:"fiction", publish: 2000, edition: 2012},
    {title: "book6" , genre:"non-fiction", publish: 1985, edition: 2020},
    {title: "book7" , genre:"fiction", publish: 2003, edition: 2023},
    {title: "book8" , genre:"history", publish: 1982, edition: 2013},
    {title: "book9" , genre:"non-fiction", publish: 1981, edition: 2017}
    
]


// const userbooks = books.filter( (bk) => {
//         return bk.genre === "history"
// })
const userbooks = books.filter( (bk) => {
        return bk.publish >= 2000
})
console.log(userbooks);
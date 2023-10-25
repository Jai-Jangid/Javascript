const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      // this will not not work good for adding two arrays ,it will add the other list as the another element of that 1st array list , so we dont use this becasue its not a good approach

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// we can use below ways to add two arrays by using concat method and spread method as shown below

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// spread method
const allnewheros = [...marvel_heros, ...dc_heros]

// console.log(allnewheros);


const anotherArry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray = anotherArry.flat(Infinity)
console.log(realanotherarray);


console.log(Array.isArray("jai"));
console.log(Array.from("jai jangid")); // 'from' method is used to make value in  an array 
console.log(Array.from({name : "jai"}));    // intersting array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));        // 'of' is also used to convert into an array
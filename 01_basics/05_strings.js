const name = "jai"
const repocount = 50

// console.log(name+repocount+"value");

console.log('hello my name is ${name} and my repo count is ${repocount}');

const gamename = new String("Rahul-dh-kr")
// console.log(gamename[0]);
// console.log(gamename._proto_);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-1,0)
console.log(anotherString);

const newStringone = "    rahul   "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://rahul.com/rahul%20sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('java'))

console.log(gamename.split('-'));

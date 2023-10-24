// arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myheros = ["shaktiman", "naagraj"]

const myarr2 = new Array(1, 2, 3, 4)

// console.log(myArr[3]);


// Array methods

// myArr.push(6)   // .push is used to add the value in the array and .pop is udes to remove the last value of the aaray
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)    // unshift is used to add the value in the starting of the array but normally we dont use it beacuse it takes the time to shift the values in the array if there is more valus 

// myArr.shift()

// console.log(myArr.includes(9));      //inclued used to find that the value is includes or not
// console.log(myArr.indexOf(3));       // indexOf is used to find the index value

// const newArr = myArr.join()     // join is used to bind the values

// console.log(myArr);
// console.log( newArr);




// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);

// the main deifference betweeen slice and splice is that splice manuplate the array but slice dont
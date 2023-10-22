/*
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

*/
/*
console.log("2">1);     //  if you want to compare two datatype then they both should be of same type 
console.log("02">1);
*/

/*
// You should always avoid the bleow all conversions beacause these type of conversion can create lot of confusions to you , we have to type only clear code so we will avoid such type of conversion

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that equality check == and comparison > < >= <= work differently.
// comparison convert null to a number,trating it as 0.thats why(3)null >=0 is true and (1)null>0 is false

*/

/*
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

*/

// strict check (===)  


//          => ===, it checks the values strictly as it also checks the type of datatype 

console.log("2" === 0);
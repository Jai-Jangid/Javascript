const accountId = 123456
let accountEmail = "jai@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2   // not allowed

accountEmail = "rahul@gmail.com"
accountPassword = 121212
accountCity ="Delhi"
let accountState;

console.log(accountId);

/*
perfer not to use var
beacuse of issue in the block scope and functional scope
*/

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])
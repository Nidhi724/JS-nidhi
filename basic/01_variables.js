const accountId = 144553
let accountEmail ="nknidhi571@gmail.com"
var accountPassword = "12345"
accountCity = "darbhanga"  //not a good practice
// let change all of them

// accountId = 233445 
// --> const keyword changes not allowed

// let accountState; 
// --> if we just declare the variable and does not assign value to them then java script take it is as undefined

accountEmail = "nknidhi705@.com"
accountPassword = 23456
accountCity = "Jaipur"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
// another method to print different things at atime 
// --> console.table([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var 
--> beacause of issue in block scope and functional scope
*/

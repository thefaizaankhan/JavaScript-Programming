const accountId = 8989
let accountEmail = "faizaankhan7701@gmail.com"
var accountPassword = "12345"
accountCity = "Jabalpur"
let accountState


// accountId = 3 // it is not allowed

accountEmail = "faizu@gmail.com"
accountPassword = "09876"
accountCity = "Bombay" // variable can also be declared like this but this is not a preferred practice. Just to remember.
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

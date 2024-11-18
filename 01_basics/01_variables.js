const accountId = 14453
let accountEmail = "mayank@gmail.com"
var accountPassword = "1234"
let accountState;

accountCity = "jaipur"

// accountId = 2

accountEmail = "mkmk@gmail.com"
accountPassword = "12121"
accountCity = "delhi"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])
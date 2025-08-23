const accountId = 14453
let accountEmail = "ayush@google.com"
var accoutnPassword = "12345"

// accountId = 2 //Not allowed
accountEmail = "hp@google.com"
accountPassword = "12458"
accountCity = "Banglore"
let accountState;

console.log(accountId); 

/*
Prefer not to use varbecause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

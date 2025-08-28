//if

const isLoggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("Less than 50");
    
// }
// else {
//     console.log("Temperature is greater than 50"); 
// }
//  console.log("Executed");
 

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if ( score > 100 ){
//     let power = "Fly"
//     console.log(`User Power : ${power}`);
    
// }

//     console.log(`User Power : ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if ( balance < 500 ){
//     console.log("Less than 500");
// } else if ( balance < 750 ){
//     console.log("Less than 750");
// }else if ( balance < 900 ){
//     console.log("Less than 900");
// }else {
//     console.log("less than 1200");    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggrdInFromEmail = true


if ( userLoggedIn && debitCard && 2==2 ){
    // console.log("Allow to buy courses");
}

if ( loggedInFromGoogle || loggrdInFromEmail ){
    // console.log("User logged in");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);

//Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



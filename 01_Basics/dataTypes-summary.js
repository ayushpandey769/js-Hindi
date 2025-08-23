// //Primitive


// // 7types : Strings , Number , Boolean , null , undefined , Symbol , BigInt

// // const id = Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id);
// // console.log(anotherId);

// // console.log(id === anotherId);


// const bigNumber = 45698775212332147n




// //Reference (Non primitive)

// // Arrays , Objects , Functions

// const Heros = ["Shaktimaan" , "Naagraj" , "Doga"];


// let myObj = {
//     name : "Harsh",
//     age : 22
// }

// const myFunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof myObj);

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-primitive)

//Stack
let myName = "Harsh Pandey"

let anotherName = myName
anotherName = "Pandeyji"

console.log(myName);
console.log(anotherName);


//Heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);

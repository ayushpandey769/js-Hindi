// singleton => object.create


//object literals

const mySym = Symbol("key1")


 const JsUser = {
    name: "Harsh",
    "full name": "Harsh Pandey",
    [mySym]: "myKey",//to use symbol as a key use [] 
    age: 22,
    location: "Moradabad",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
 }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//to access a symbol use []

JsUser.email = "h@google.com"
// Object.freeze(JsUser)
JsUser.email = "h@chatgpt.com"
// console.log(JsUser);

JsUser.greetings = function(){
   console.log("Hello Js user");
}

JsUser.greetings2 = function(){
   console.log(`Hello Js user, ${this["full name"]}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());

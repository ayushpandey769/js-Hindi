//Browser ke andr global object h window object and node k andr value empty object hai if we use this

const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        // console.log(this);
        //In object if we use this it gives the whole key value pairs
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
//     //In functions if we use this we get other things
// }

// chai()

// const chai = function(){
//     let username = "Harsh"
//     console.log(this.username);  
// }

// chai()

const chai = () => {
    let username = "Harsh"
    console.log(this);  
}
// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }//In curly brackets we use return => Explecit reutrn

// const addTwo = (num1 , num2) =>   num1 + num2
// const addTwo = (num1 , num2) =>   ( num1 + num2 )
//Using parenthesis we do not use return => Implecit return

const addTwo = (num1 , num2) =>   ({username: "Harsh"}) //For objects


// console.log(addTwo());
 (() => {})
 (() => ())

 //Regular Function	: Depends on how the function is called(global object).
//Arrow Function : Always uses this from where it was created.

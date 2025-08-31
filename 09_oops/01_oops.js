const user = {
    username: "Harsh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor (ek new context banane me kaam ata hai)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne = new User("Harsh" , 12 , true)
const userTwo = new User("ChaiaurCode" , 11 , false)

// new keyword likhte he ek empty object create hote hai jaise instance bola jata h
// ek constructor function call hota h new keyword ke karan aur jitne arguments hai unko constructor me pack karke hame deta hai
// jo bhi arguments hai wo this ke andr inject ho jate hai
// last me hame mil jate hai function ke andr

console.log(userOne.constructor);
// console.log(userTwo);


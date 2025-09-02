function setUserName(username){
    //DB complex call
    this.username = username;
    console.log("Called");
    
}

function createUser(username , email , password){
    setUserName.call(this , username)
     
    this.email = email;
    this.password = password
}

const chai = new createUser("Chai" , "chai@google.com" , 1214)

console.log(chai);

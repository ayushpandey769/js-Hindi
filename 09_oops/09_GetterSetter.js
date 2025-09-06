class User {
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()

    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}harsh`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
    //setter ko return nahi krte
}

const Harsh = new User("h@google.com" , "abc")
console.log(Harsh);
console.log(Harsh.email);
console.log(Harsh.password);

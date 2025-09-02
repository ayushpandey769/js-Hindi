// Properties store data about an object;

// Methods define what the object can do (actions/functions).

// In technical terms, a method is a property whose value is a function.

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.Harsh = function(){
    console.log(`Harsh is present in all objects`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says hello`);
}

// heroPower.Harsh()
// myHeros.Harsh()
// myHeros.heyHarsh()
// heroPower.heyHarsh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "


String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Harsh   ".trueLength()
"Chai".trueLength()

/*
    i)A prototype is basically: An object from which another object can inherit properties and methods through a prototype chain.
    ii).prototype => Property of constructor function
    iii)__proto__ => Reference to object's prototype

*/


// let myName = "sayali     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sayali = function(){
    console.log(`sayali is present in all objects`);
}

Array.prototype.heySayali = function(){
    console.log(`Sayali says hello`);
}

// heroPower.sayali()
// myHeros.sayali()
// myHeros.heySayali()
// heroPower.heySayali()

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
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sayali".trueLength()
"iceTea".trueLength()
//Object Literal => literally is an object 
//for example 
const user = {
    username: "Sayali",
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


//constructor function 
/*
    1]"new" keyword is the constructor function
    2]it can allows to create multiple instances from one object
*/

function User(username , loginCount , isLoggedIn){
    this.myusername = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Sayali",12,true)
const userTwo = new User("ChaiAurCode,11,false")
console.log(userOne.constructor);
console.log(userTwo);






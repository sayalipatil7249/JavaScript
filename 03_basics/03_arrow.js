const user = {
    username: "Sayali",
    price:999,

    //sometimes in future someone can change the username so where we want welcome message different
    welcomeMessage: function(){
        //console.log(`${username} , Welcome to Website`);    //this still work but it is not correct way
        console.log(`${this.username} Welcome to website`);    //when we refer to the current contxt then we use "this" keyword alongwith the variable name{access variables within that whole one scope}
        //console.log(this);    //it gives the current context
        

    }
}

user.welcomeMessage;    //when we run this , it does't return any value
user.welcomeMessage();  //it returns the value ..output =>  Sayali Welcome To website
console.log();

user.welcomeMessage()
user.username = "Sayu";    //it changes the username ...because in above welcomeMessage() we tell that return the value which is inside the current context 
user.welcomeMessage();
console.log();

console.log(this);   // it returns the empty object because we are under node environment  ..so "this" keyword refers to the empty object becuase there is no context inside global

//NOTE : the global object inside browser is window object   ....most important for interview
console.log();

//this is important example

// function chai(){
//     let username = "Sayali"
//     console.log(this);    //we print "this" in node environment means inside function then it returns many values  
//     console.log(this.username);    //it returns output => undefined
    
// }
// chai();



//Arrow Function
const chai = () => {
    let username = "Sayali"
    console.log(this);    //output = {}   
    console.log(this.username);    //it returns output => undefined
    
}
chai();
console.log();

const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));


//now implicit return function ..means it automatically understands what to return    
const addTwoNew = (num1 , num2) => num1 + num2;
console.log(addTwoNew(4,5));

const addTwoNew1 = (num1 , num2) => (num1 + num2);
console.log(addTwoNew1(3,2));
console.log();

//NOTE1: In implicit return , if we wrapped inside curly braces then return statement must needed , and if we wrapped inside parenthesis then there is no need of return statement  ....most most important
//NOTE2: In explicit return , we have to use return statement explicitly then it is explicit return

//if we want to return object then we do following method
const addTwoNew2 = (num1 , num2) => {username: "Sayali"}   //output = undefined , becuase it is wrong way to return ....to solve this problem wrap it inside the parenthesis like following
const addTwoNew3 = (num1 , num2) => ({username: "Sayu"})   //output = 
console.log(addTwoNew2(1,2));
console.log(addTwoNew3(4,3));
console.log();

const myArray = [2,5,3,7,8]

//myArray.forEach()

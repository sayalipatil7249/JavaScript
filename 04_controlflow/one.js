//if statement

if(false){
    //this code is not execute because the condition is false
}

if(true){
    //this code executed because the consition is true
}
/*
The operators to be used are :
    < , > , <= , >= , == (it only checks values) , != , === (it checks values as well as data types) , !==
*/

const temperature = 41;
//if statement
if(temperature < 50){
    console.log("Less than 50");  
}

//if-else statement
if(temperature < 50){
    console.log("Less than 50");  
} else {
    console.log("Temperature is graeter than 50");
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`User Power : ${power}`);    //output => User Power : fly
}
//console.log(`User Power : ${power}`);   //this gives error named "power is not defined" ..because we define power inside the if block hence it is not accessible outside the if block(which is concept of block scope)

//Shorthand Notation
const balance = 1000
if(balance > 500) console.log("test");    //this is implicit notation

//if - else if (if we want to check two or more conditions)
if(balance < 500){
    console.log("Less than 500");
} else if(balance < 750){
    console.log("Less than 750");
} else if(balance < 950){
    console.log("Less than 950");
} else {
    console.log("Less than 1200");
}


//How to implement in real life examples(to check multiple conditions)
const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedinFromGmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy a course");
}

if(LoggedInFromGoogle || LoggedinFromGmail){
    console.log("User Logged In");
    
}

//Switch Case(To checks value through multiple conditions)
/*Syntax:
switch (key) {          //here kry means the value to checked
    case value:
        
        break;

    default:
        break;
}
*/
//example
const month = 3
switch (month) {          
    case 1:
        console.log("January");                //to duplicate the content => select the content and then shift + alt + down arrow
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}
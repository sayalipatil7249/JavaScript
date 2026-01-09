//there are 2 types of scope => block scope and global scope 


let a = 300;
var c = 400;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a);
// console.log(b);
console.log(c);     //it prints value inside the block not prints value outside the class

//let and const both have block scope ..if it is initialized inside block then it not accessible outside the class
//but var have global scope ..it is accessible outside the class also
//scope inside node and scope inside windows both are different

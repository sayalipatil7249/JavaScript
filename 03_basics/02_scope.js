//there are 2 types of scope => block scope and global scope 

let a = 300;
var c = 400;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER:", a);
    
}

console.log(a);
// console.log(b);
console.log(c);     //it prints value inside the block not prints value outside the class

//let and const both have block scope ..if it is initialized inside block then it not accessible outside the class
//but var have global scope ..it is accessible outside the class also
//scope inside node and scope inside windows both are different


//Nested Scope
function one(){
    const username = "Sayali"

    function two(){
        const website = "YouTube"
        console.log(username);
        
    }
    //console.log(website);   //it gives error beacuse the website is declared inside function two() hence it is not accessible outside that function

    //execute function two 
    two();     //but if we execute two() then it gives us the output = Sayali
}
//execute function one
one();    // here while calling only function one() not function two() then it doesnt gives the output as username 

//NOTE : In nested function , the child function(i.e. two()) can access the variables of parent function(i.e. one())

if(true){
    const username = "Sayali"
    if(username === "Sayali"){
        const website = " YouTube";
        console.log(username + website);
    }
    //console.log(website);     //it gives error becuase the scope of website is limited to that block only ..not outside that if block
    
}
//console.log(username);     //it also gives error becuase the scope of username is limited to that block only ..not outside that if block


// ++++++++++++++++++++++++++++++  Interesting Example +++++++++++++++++++++++++++++++++++++
//1] here the function is only declared hence we can access/call that function addone() before initialization
console.log(`Function addone() is called : ${addone(5)}`);   //here it doesn't gives error even if we call it before initialization
function addone(num){
    return num + 1;
} 

//2]but below the function is declared and store it inside one variable so this type of function cannot accessible/call before the initialization 
//addTwo();       //here if we call before initialization then it gives error   ...so we have to call it after initialization
const addTwo = function(num){
    return num + 2;
}
console.log(`Function addtwo() is called : ${addTwo(5)}`);


//and this above type of declaration is the concept of hoisting
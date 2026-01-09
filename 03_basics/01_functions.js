function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("L");
    console.log("I");
}

//calling function
sayMyName ;  //it is reference
sayMyName();  //it is execution
console.log();

//basic function to add 2 numbers
function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2);
    let result = number1 + number2;
    return result;
    //or return number1 + number2
}
//call the function
addTwoNumbers(3 , 7);
addTwoNumbers(3,"7");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);

const result = addTwoNumbers(5,3);
console.log("Result:",result);     //it returns the output=> undefined when the console.log(number1 + number2) is written inside function
console.log();

//another example
function loginUserMessage(username){
    /*if(username == undefined){
        console.log("Please enter a username");
        return
    }*/
   //or if sometimes the condition is false then it doesn't go inside loop then follow below method
    if(!username){
        console.log("Please enter a username");
        return
    }
    /* or we also give the default value sam
    function loginUserMessage(username = "sam"){
    
    }
    
    */
    return `${username} just logged in`
}

loginUserMessage("Sayali");   //it only returns values not prints
console.log(loginUserMessage("Sayali"));  //now it prints value
//if we not passed any value then it returns undefined
console.log(loginUserMessage());   //output => undefined just logged in
 //then check value first by using if() ass above function
console.log();

 //Functions with objects and array

 function calculateCartPrice(...num1){             //dot dot dot operator means the sprade or rest operator but when to call sprade and when to call rest is depends on its use case
    return num1
 }

 console.log(calculateCartPrice(200,300,400));    //here we have multiple values hence we use the rest operator and it returns array
 console.log();
 

 //but suppose if we give the parameters like val1 , val2 , ...num1 then which values should go in num1?
 function calculateCartPrice1(val1,val2,...num1){
    return num1;
 }

 console.log(calculateCartPrice1(200,400,500,2000));    //val1 = 200 , val2 = 400 , and rest of the things go into num1 i.e. num1 = [500,2000]
 console.log();

 const user ={
    username: "Sayali",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user);
 //we also directly pass the object
 handleObject({
    username: "Sayu",
    price: 399
 })

 const myNewArray = [200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,500,1000]));
 
 
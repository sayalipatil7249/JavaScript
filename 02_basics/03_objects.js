//singletone (when the objects created from constructor then it becomes singletone object)  and if it is created from literals then it is not singletone objects
//Object.create   => this is means constructor method through i.e. singletone


//now another unique datatype in primitives is symbol
//declaration of symbol
const mySym = Symbol("Key1")
//the interviwer asked that take one symbol and add it to the key of object...or use symbol as a key  then do as following

//object literals
const JsUser = {
    name : "Sayali",
    // mySym : "mykey1",     ...this method not used as sysmbol ..it is used as string
    [mySym] : "myKey1",    //this method of declaring is correct ..it gives the actual symbol
    age : 18 ,
    location : "Karad",
    email : "sayali@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" ,  "Saturday"]
}

//How to access the values of objects (2 ways : by using dot operator , or by using square notation)
console.log(JsUser.email);              // this is old method ..many developers does not use it 
//console.log(JsUser[email]);           //....this is another method is square notation and currently this method is preffered , 
/*but above line gives error beacuse when we created object above then email behaves as a string 
so we have to write inside double quotes , if we access using dot operator then don't need of double quotes*/
console.log(JsUser["email"]);


//if we try to print symbol or accsess symbol
console.log(JsUser[mySym]);    //output => myKey1  ...here is the problem beacuase it gives mykey1 it not actually use as a symbol instead it is use as string...output doesn't change only the change in type
//but if we want to use it as a symbol then enclosed mySym with square method above 

//changing the value of objects
JsUser.email = "Sayu@gmail.com";
//if we want that no one can change the value then we freez the object as following
//Object.freeze(JsUser);
console.log(JsUser);

//also use functions 
JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   //i want to refer the name ...so when we want to refer the same object then we use "this."  so it shows all the properties inside object
}

//understand both following methods (i.e. JsUser.greeting , JsUser.greeting())
console.log(JsUser.greeting);   //output => [Function (anonymous)]   ...it means function return back means function not executes only returns the reference of function

console.log(JsUser.greeting());  //output => Hello JsUser
console.log(JsUser.greetingTwo());



 


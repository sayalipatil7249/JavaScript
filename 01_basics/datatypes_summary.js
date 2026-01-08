// there are two types of datatypes : Primitive and not-primitive

/*Primitive Datatype => this are call by value
    7 types : String , Number , Boolean , null , undefined , symbol, BigInt 
*/

const score = 100 
const outsideTemp = null
let userEmail;

const id = Symbol('123')   // it determines unique values
const anotherId = Symbol('123')

console.log(id=== anotherId)   // output is false because return values are not same

const bigNumber = 569874562365789654n   // write 'n' at the end

/*Non-Primitive or reference Datatype => this are call by reference
    3 types : Array , Objects , Functions
    return type of all non-primitive datatype if object only
*/

const heros = ["abc","def","ert"] ;//array

let myObject = {           //this is object
    name: "Sayali",
    age: 22,
}

//functions
const myFunction = function(){
    console.log("Hello Sayali");
}

// to find datatype of any variable then use function -> typeOf()
console.log(typeof(bigNumber))
console.log(typeof(myFunction))   //output is function object
console.log(typeof myObject)





console.log()
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log()
console.log("Stack and Heap Memory:")
//stack(Primitive datatypes)  , Heap(Non-primitive datatypes)

/* 1]Stack: whenever we declare the variable inside stack then it returns the copy of data 
i.e. if we try to change the value of variable then it changes 
inside that copy of data not original value 

2]Heap : the variable declare inside heap then it returns reference of that variable
i.e. if we try to change the data then it changes inside original data ..because here it doesn't returns the copy

*/

console.log("1]Stack Memory")
let myYouTubeName = "sayali@gmail.com"
anothername = myYouTubeName    //here it creates the copy of myYouTubename
anothername = "sonu@gmail.com"  //and here the changes inside copy of data , not in original data

console.log(myYouTubeName)
console.log(anothername)
console.log(".........................................................")
console.log("2]Heap Memory")   //heap memory returns the reference of object
let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo =  userOne    //here now userOne and userTwo points to same objects or data in heap

userTwo.email = "panu@hmail.com"  // so any changes inside userTwo it automatically changes the userOne data also 

console.log(userOne.email)
console.log(userTwo.email)


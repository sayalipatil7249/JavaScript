const userEmail = "sayali@gmail.com";
//here it doesn't check explicitly that the condition is true or not ...it automatically checks that
if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
1]Falsy values => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
2]Truthy values => "0" , 'false' , " " , [] , {} , function(){}

*/

if(userEmail.length === 0 ) {
    console.log("Array is empty");
}

const emptyObj = {};
//Object.keys(emptyObj) returns an array
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

/*
some comparisons and there output
1] false == 0 ....output => true
2] false == '' ....output => true
1] 0 == '' ....output => true
*/

//Nullish Coalescing Operator (??) => this is only for null , undefined
let val1;
val1 = 5 ?? 10
console.log(val1);
val2 = null ?? 10
console.log(val2);
val3 = undefined ?? 15
console.log(val3);
val4 = null ?? 10 ?? 20
console.log(val4);


//Ternary Operator
//Syntax  = > consition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");



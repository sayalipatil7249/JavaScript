"use strict"  //treat all js code as newer version 

//alert(3 + 3)   //it doesn't give the o/p 6 because we are using nodejs , not browser

console.log(3 + 3)   //it gives output as 6 ...code readability should be high

//datatypes

let name = "Sayali"  //String datatype
let age = 18  //number datatype 
let isboolean = true  //boolean datatype

//1]number => range is 2 to power of 52
//2]bigInt
//3]String => " "
//4]null =>standalone value
//5]undefined => value is still not assigned
//6]boolean => true/false
//7]symbol => unique
//8]object

console.log(typeof age);
console.log(typeof name);
console.log(typeof isboolean)
console.log(typeof null)     // output of this is object ...because the null is object not datatype 
console.log(typeof undefined)  //output of this is undefined ...because undefined is a datatype ..not object
console.log(typeof "Sayali")
console.log(typeof 18)

let score = "33"

console.log(typeof score)
console.log(typeof(score))

//the given number is in string and i want to convert it to number then do following type of conversion

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

//output of following types
//1]"33" => 33
//2]"33abc" => NaN
//3]true => 1 ; false =>0
//4]null => 0
//5]undefined => NaN

//now check for conversion into boolean
let isLoggedIn = 1      
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//output of boolean inputs
//1] 1=> true ; 0 => false
//2]"" => false       this is empty string
//3]"Sayali" => true



//conversion into string
let aNumber = 33
let stringNumber = String(aNumber)
console.log(stringNumber)    // o/p is 33 but its datatype is string not a number
console.log(typeof stringNumber)  
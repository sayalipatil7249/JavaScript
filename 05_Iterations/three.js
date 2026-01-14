//for of loop

// ["" , "" , ""]
// [{} , {} , {}]

console.log("forof loop");

/*SYNTAX : 
for (const element of object) {
    //body
}
*/

//EXAMPLE 1
const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}
console.log();

//EXAMPLE 2
const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
console.log();

//MAPS(Map is the object that holds key-value pair..it contains unique values not duplicate values)
console.log("MAPS : ");

const map = new Map();
map.set('IN','India');
map.set('USA' , 'United states of India');
map.set('Fr','France');
console.log(map);
console.log();

//now here we apply for of loop on map
for (const key of map) {
    console.log(key);
}
console.log();
//the above structure gives me key and value together in array ...but i want key and its value seperate..then use folloeing syntax
for (const [key , value] of map) {
    console.log(key  ,':-' , value);   
}
//the above structure is correct which de-structures key and its value by wrapped key and value inside square bracket
console.log();

//for of loop doesn't works on objects ... it works on maps but not on objects







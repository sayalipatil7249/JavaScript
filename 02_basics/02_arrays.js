const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(`Array of marvel_heros and dc combined: ${marvel_heros}`);
// console.log(`Array element at index 3 of combined array: ${marvel_heros[3]}`);
// console.log(`Array element at index 3 from which the 1st element: ${marvel_heros[3][1]}`)

//concat operator
// const allHeros = marvel_heros.concat(dc_heros)   //it gives all elements in one line without bracket
// console.log(allHeros);

//spread operator    ... in this programming , programmer must prefer this operator
const all_new_heros = [...marvel_heros , ...dc_heros]   //all elements are sprade when we do "dot dot dot" ..so it not remains array whose one one elements are individual
console.log(all_new_heros);

console.log();

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)    //flat concatinate the all sub-array elements recursively int one array
console.log(real_another_array);
console.log();


console.log(Array.isArray("Sayali"));   //this checks whether it is array or not...output => flase means it is not array
//To convert it into array use "from" as following
console.log(Array.from("Sayali"));     // it is convertd into array
console.log();

console.log(Array.from({name: "Sayali"}))   //it returns the empty array beacuase it not directly convert into array ....most important and interesting

console.log();

//if we want to convert multiple variables into array then do as following
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));



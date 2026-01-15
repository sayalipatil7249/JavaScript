const myNumers = [1,2,3,4,5,6,7,8,9,10]
//add 10 in each element of array
const newNums= myNumers.map( (num) => { return num + 10} )
console.log(newNums);
/*output : 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/
console.log();
const newNums1= myNumers.map( (num) => {num + 10} )
console.log(newNums1);
console.log();

/*output :
[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
*/

//Chaning concept
const newNums2 = myNumers
                .map( (num) => num * 10 )    //the result of this map is passed to next map 
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )
console.log(newNums2);


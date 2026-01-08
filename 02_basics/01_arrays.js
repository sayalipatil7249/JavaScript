//Array
/*
    1]Array is an object which is collection of multiple items
    2]it also allows mix of different datatypes
    3]Javascript array-copy operations create shallow copies(is a copy whose properties share the same reference) not deep copies
*/

const myArr = [0,1,2,3,4,5]
console.log(`the value at index 1 of myArr is ${myArr[1]}`)
const myHeros = ["Shaktiman" , "Ram"]

const myArr1 = new Array(1,2,3,4)
console.log(`the value at index 1 of myArr1 is ${myArr1[1]}`)

//Array methods
myArr.push(6)
myArr.push(7)
console.log(`Array after push 6 and 7 : ${myArr}`);
myArr.pop()
console.log(`Array after pop element : ${myArr}`);

myArr.unshift(9)   //it adds value at start i.e. at 0th index ...so problem is index of all other element is shift which is very time consumimg and error less
console.log(`Array after unshifting of 9 : ${myArr}`)
myArr.shift()     //it removes unshifted digit
console.log(`Array after shifting : ${myArr}`)

console.log(myArr.includes(9));   //include method returns the true or false value ...here it checks whether 9 includes in array or not ..output => false
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()   //join operation binds array elements and also converts them into string
console.log(myArr)
console.log(newArr)  // array elements remains same but the only change in type of elements
console.log(typeof newArr)

//slice , splice
console.log(`original array=> A : ${myArr}`);
console.log()

const myn1 = myArr.slice(1,3)  // last range is not include ..only 1 and 2 includes
console.log(`Range includes for slice operation : ${myn1}`);
console.log(`original array after slice operation=> B : ${myArr}`);   //slice opeartion returns original array as it is
console.log()

const myn2 = myArr.splice(1,3)  // last range is includes ..i.e. 1,2,3 includes
console.log(`Range includes for splice operation : ${myn2}`);
console.log(`original array after splice operation=> C : ${myArr}`);  //splice operation returns the array of reamaining index ...it excludes the elements of given range and give the remaining array 
console.log()
//slice operation does not manipulate original array
//splice operation manipulates the original array   
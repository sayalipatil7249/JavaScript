//filter map and reduce

//forEach loop doesn't return any values and if try to return it then it will return undefined

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach( (items) => {
    console.log(items);
    return items;
} )
console.log(values);
console.log();


//filter operation
const myNums = [1,2,3,4,5,6,7,8,9,10];
//myNums.filter( (num) => {num > 4} )     //it returns values ...forEach loop doesn't returns any value but filter operation returns values but we have to store it in variable as below
const newNums =  myNums.filter( (num) => (num > 4) )  //we store it in variable newNums
console.log(newNums);  // output => [ 5, 6, 7, 8, 9, 10 ]

const newNums1 =  myNums.filter( (num) => {num > 4} )  
console.log(newNums1); //output => [] ....empty object becuase of scope limit ..hence it is not accessible outside the scope
//so to avoid this we have to explicitly return it
const newNyms2 = myNums.filter( (num) => {
    return num>4;
} ) 
console.log(newNyms2);    //it will gives the exact result
console.log();

//alternative method
const newNums3 = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
} )
console.log(newNums3);



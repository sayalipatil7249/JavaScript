//while loop

let index = 0;
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2;
}

let myArray = ['flash' , 'batman' , 'superman']
let arr = 0
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
console.log();

//do-while loop
let score = 1;
console.log("Do-While loop");
do{
    console.log(`score is ${score}`);
    score++;    //if it is not written or we not increment it then it goes into infinite loop
}while(score <= 10);
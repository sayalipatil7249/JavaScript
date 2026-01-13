//for loop

/*SYNTAX : 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
 
//EXAMPLE       (one command ----> ctrl + D ...(select text which we have to select (i.e.same variables ) here index index is used 4 times so i want to change it to 'i' at once so i select the text and type this command 4 times and change it))
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5 ){
        console.log("5 is best number");
    }
    console.log(element);
}
console.log();

//NESTED FOR LOOP
console.log("NESTED LOOP : ");

for (let i = 0; i <10; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop value : ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j );
    } 
}
console.log();

let myArray = ["Flash" , "batman" , "superman"];
console.log(`Array length is ${myArray.length}`);

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}
console.log();

//break and continue
console.log("BREAK AND CONTINUE STATEMENT");

console.log(`1]Break Statement : `);
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`); 
}
console.log();

console.log(`2]Continue Statement`);
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`); 
}

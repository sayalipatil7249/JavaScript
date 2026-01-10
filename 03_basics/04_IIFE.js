//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //This is named IIFE
    console.log(`DB CONNECTED`);
})() ;                               
/*this is syntactically correct function  ...
and if we want to write 2 IIFE together then we have to end the 1st IIFE and to end this IIFE we have to use semicolon compulsory*/

//NOTE : here 1st parenthesis contains the function defination and 2nd parenthesis contains execution call

/* what is IIFE?
ANS : Sometimes the problems occurs due to pollution of global scope ...so to avoid the pollution of variables or declarations of global scope we use IIFE
*/

//Below are simple/Unnamed IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
    
}) ();

//Passing an Parameter
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
    
}) ('Sayali');

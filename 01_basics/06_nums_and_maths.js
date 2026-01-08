console.log("*********************** Numbers *********************")
console.log()
const score = 400 ;
console.log(score);

const balance = new Number(1000);     //it specifically defines the datatype of the given number
console.log(balance)    // output => [Number : 1000]

console.log(balance.toString())   // output => 1000
console.log(balance.toString().length);
console.log(balance.toFixed(1)); // output => 1000.0
console.log(balance.toFixed(2)); //output => 1000.00   // it gives precision value

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));   // output=>124
console.log(otherNumber.toPrecision(4));   // output=>123.9 

const hundreds = 1000000
console.log(hundreds.toLocaleString());  
console.log(hundreds.toLocaleString('en-IN'))   // output => 10,00,000  it gives the output by indian style

console.log()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("*********************** Maths *********************")
console.log()
console.log(Math)
console.log(Math.abs(-4));   // output=> 4 ....it gives positive value
console.log(Math.round(4.6));     //output=> 5  ....it gives correct decimal value
//while convert into decimal value if i want to choose upper or lower value then use following functions
console.log(Math.ceil(4.2))   //output => 5 ....it gives upper value
console.log(Math.floor(4.9))  //output => 4 ....it gives lower value 
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) //the values of Math.random it always between 0 to 1 
console.log(Math.random()*10)   //it also give value start with 0 for the case 0.000
console.log(Math.random()*10 + 1)  //it gives value minimum 1 not 0
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min )
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//Dates

let myDate = new Date()    //object and its instance
console.log(myDate);    
console.log(myDate.toString())     //it gives date with day and time
console.log(myDate.toDateString());   //it gives only date with day
console.log(myDate.toLocaleString());  //it gives only date with time not day
console.log(myDate.toLocaleDateString());  //it gives only date
console.log(myDate.toLocaleTimeString())   //it gives only time
console.log(typeof myDate);     //in javascript Date it always of type object

console.log();
//the dates created by us
let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());

let myCreatedDate1 = new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date(2023,0,23,5,3)   //here 0 means Jan , 23 is date , 5 is hrs , 3 is min
console.log(myCreatedDate2.toLocaleString())

/*in javascript we give month in only single digit like 0 , 1 , etc then the month start from 0 because it is an array 
but if date gives in YY/MM/DD format i.e. month in 2 digits like 01 , 02 , etc then the month starts from 1
*/

//but generally we follow MM/DD/YY
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString())

//Timestamps
console.log()
console.log("*********************** TimeStamp ***************************")
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());   //it gives the timestamp of our own created date
//if we want seconds then 
console.log(Date.now()/1000);   //output => 1767507951.564
//but above this gives me in decimal format 
//to avoid this use math format as following
console.log(Math.floor(Date.now()/1000));  //output => 1767508048

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1)


//string Inter-polation means backticks (``)
// `${newDate.getDay()} and the time`


//to customize the format then we use following
newDate.toLocaleString('default' , {
    weekday: "long"
})
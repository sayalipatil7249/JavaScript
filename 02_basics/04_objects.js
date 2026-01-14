const tinderUser1 = new Object();   //this is singletone object
//OR
const tinderUser = {};   //this is non-singletone object
//assign values to empty object as follows
tinderUser.id = "123abc";
tinderUser.name = "Sayali";
tinderUser.isLoggedIn = false;

console.log(`Details of tinderUser: ${tinderUser}`);   //it returns the empty object
console.log();


const regularUser = {
    email: "sayali@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Sayali",
            lastname : "Patil"
        }
    }
}

//accsess the above elements as follows
console.log("Details of regular user object :");
console.log(regularUser);
console.log();
console.log(regularUser.fullname);
console.log();
console.log(regularUser.fullname.userfullname);
console.log();
console.log(regularUser.fullname.userfullname.firstname);
/* HINT :
in above code suppose there is case that fullname or any other element is not exist in object then what happend => errrors are occurs ..so to avoid this errors use following tricks of question marks to access element
console.log(regularUser.fullname?.userfullname.firstname);
*/
console.log();

//combine objects
const obj1 = {1: "a" , 2: "b"}    //key-value pair  //this is target object
const obj2 = {3: "c" , 4: "d"}   //this is source object

//now merge objects
const obj3 = {obj1 , obj2}    //this is method 1   this method gives the output as same as array which creates problem
console.log(obj3);    //output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 
console.log();

//so to avoid this problem use following method
const obj4 = Object.assign({} , obj1 , obj2);   //giving empty object is good practice ...means all other objects are merger into that empty object
console.log(obj4);
console.log();

//another or most preffered method to merger objects is following : (i.e.sprade operator)
const obj5 = {...obj1 , ...obj2};
console.log(obj5);
console.log();

//the following syntax is used when the values comes from database  ...following is the example that shows how thw values comes from database
//when the values comes from database then it comes in the form of array like following
const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "pqr@gmail.com"
    },
    {
        id: 4,
        email: "stu@gmail.com"
    },
]      //this are many values of objects

//access elemets
console.log(users[1].email);   //that means i want to access email of 1st object
console.log();

console.log(tinderUser);
console.log();

//if i want all the keys of objects then do as following
console.log(`All Keys of tinderUser : ${Object.keys(tinderUser)}`);   //here i want all keys of object tinderUser ...and the return type of the keys is Array ..means all the keys stored in array
console.log(`All Values of tinderUser : ${Object.values(tinderUser)}`); 
console.log(`All entries of tinderUser : ${Object.entries(tinderUser)}`);   //it create each key-value in the form of array(whose 1st property is always key and 2nd is there value)
console.log();

//sometimes the value is not exist when we loop through objects so beacuse of that program is crashed ..so to avoid this use following is example
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //output => true ...beacuse isLoggedIn is present in tinderUser object
console.log(tinderUser.hasOwnProperty('isLogged'));    //output => false ...becuase isLogged is not present in tinderUser object
console.log();
console.log("***************************************************************");

//Destructuring
console.log("Destructing:");
console.log();
const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Sayali"
}

//while accessing the elements we do following
//course.courseInstructor    ...but sometimes if i want to use again and again then then this may repeating

//so do as following:
const {courseInstructor} = course;     //or give short name also ...  const {courseInstructor : Instructor} = course;     console.log(Instructor);
console.log(`The Course Instructor is ${courseInstructor}`);   //here in this method no need to access by dot operator
console.log();

//react concept
// const navbar = (props.company) => {                                 //but instaed of writing in this way we do direct with destructuring means inside curly braces
//                                                                     /*
//                                                                             const navbar = ({company}) => {
                                                                                
//                                                                             }
//                                                                     */
// }
// navbar(company = "Sayali")  




//API(API means how we write the values comes from backend ) ...previously values comes in XML structure which is more complex but now the values comes in JSON format
//JSON is also object like following
// {
//     "name": "Sayali",
//     "coursename": "JS in hindi",
//     "price": "free"
// }                                 //in json format key and its value both are in string format ..if we dont take the keys in string format then it will cause the error

//API's are also come in array format where which conatins multiple objects
[
    {},
    {},
    {}
]
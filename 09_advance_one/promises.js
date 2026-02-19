/*
    PROMISES :
       i)A Promise is an object that represents the future result of an asynchronous operation.
       ii) A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 
       iii)it has 3 states :
        a)Pending : still working
        b)Fulfilled : success, result available
        c)Rejected : error occurred
*/

//create promise Method 1 by storing in variable
const promiseOne = new Promise(function(resolve,reject){
    //do async tasks : DB calls , cryptography , network 
    setTimeout(function(){
        console.log("Aysnc task is completed");
        resolve();  //when this method is called then it is connected with .then()...and after calling this method promise is consumed 
    },1000)  
})

//consume promise => to consume promise use .then() which has direct connection with resolve
promiseOne.then(function(){
    console.log("Promise Consumed");
})


//create promise method 2 without storing in variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolved"); 
})

//create promise 3 
const promiseThree = new Promise(function(resolve,reject){
    //when we have to pass the data come from network 
    setTimeout(function(){
        resolve({
            username: "Sayali",
            email : "sayali@gmail.com"
        })
    },1000)

})

promiseThree.then(function(user){
    console.log(user);  //user is the object that contains the data passed in resolve()
    
})

//create promise 4 with error = true
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Sayu" , email : "sayu@gmail.com"});
        } else{
            reject("ERROR : Something Went Wrong");
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
} )
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected"); 
} )
console.log();

//create promise 5 with error = false
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Sonu" , email : "sonu@gmail.com"});
        } else{
            reject("ERROR : Something Went Wrong");
        }
    },1000)
})

promiseFive
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
} )
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected"); 
})
//above syntax is called chaning

//create promise 6 
const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "javascript" , password : "123"})
        } else {
            reject("ERROR : JS went wrong ")
        }
    },1000)
})

async function consumePromiseSix(){
    try {
        const response = await promiseSix
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseSix()

//Method 1
// async function getAllUsers(){
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  //it can convert the response file into json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

//Method 2 using chaining .then()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)


/*
    ABOUT fetch() method:
        i)fetch() is a modern JavaScript method used to make HTTP requests and it returns a Promise that resolves to a Response object.
        ii)It does NOT reject on HTTP error (like 404) automatically ❗
        iii)fetch() does NOT directly give data. It gives a Response object first.
        iv)Server sends data in JSON format
        v).json() converts it into usable JS object
*/      
const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")     //it  defines from math module i want value of PI 
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true ,

    orderChai: function(){
        console.log("order incomplete");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai));   //it gives output => undefined because getOwnPropertyDescriptor() defines the propert but we chai is object 
console.log(Object.getOwnPropertyDescriptor(chai,"name"));  //output => {value: 'ginger chai',writable: true,enumerable: true,configurable: true}  ....here we define the propert "name" from object "chai"

// Object.defineProperty(chai , 'name' , {
//     writable: false ,
//     enumerable: false 
// })

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
}


/*
    i)this getOwnerPropertyDescriptor() tells the hidden things of object
*/
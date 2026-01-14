//for in loop on objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]} `);
}
console.log();


//check for in loop is works on array or not(When we apply it ...)

const programming = ["js" , "rb" , "py" , "java" , "cpp"]
console.log("For in loop apply on array which returns only keys: ");
//following syntax gives only keys
for (const key in programming) {
     console.log(key);
}
console.log();

//but if we want its values then use following syntax
console.log("For in loop apply on array which returns only values: ");
for (const key in programming) {
    console.log(programming[key]);
    
}
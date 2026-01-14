const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
//the below function inside forEach is the callback function so it doesn't have name
console.log("Simple Function : ");
coding.forEach( function (val) {
    console.log(val);
})
console.log();
console.log("Arrow funtion : ");
//arrow callback function
coding.forEach((item) => {
    console.log(item); 
})
console.log();
coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})
console.log();

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

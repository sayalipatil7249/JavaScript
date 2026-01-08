const name = "Sayali"
const repocount = 5

console.log("1]Old method by using + : ")
console.log(name + repocount + " value")   // thsi is very old method ...in modern age no one can use it 
console.log()
//instead of this above method , use following method of by using (`` => backticks) which is easy here use "${}"  inside curly bracket give variable name which automatically prints value
console.log("2]New methods by using backticks(``):");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
console.log()

//create string by using different method
const gameName = new String("Sayali-SP-com")
console.log(gameName[0])   //it gives value at index 0
console.log(gameName.toUpperCase())    //here there is no chanege in original string

//to find prototype use following
console.log(gameName.__proto__);   //it returns {} it means the string is object 
console.log(gameName.length);
console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))

const newString = gameName.substring(0,4)    //it incudes the string upto 3rd index  , and it doesn't includes the negative index
console.log(newString)

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

const newStringOne = "   sayali   "
console.log(newStringOne)
console.log(newStringOne.trim());   //trim() function removes the starting and ending white spaces
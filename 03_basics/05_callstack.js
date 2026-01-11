//This part is most important in javascript:

/*types of execution context in javascript
1]Global execution context
2]Function Execution context
3]Eval Execution context......currently this type is not much important 
*/

//code example
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1.val2)
let result2 = addNum(10,2)

//**How javascript code is executed??**
/*
java code file -> run in two phases : a) Memory craeting phase , b)Execution Phase  -> 

any code that first run through global execution
how executes??
1]Global execution or  global environment context
        and the code is allocated inside "this"

2]Memory phase:(this is cyle 1)
   in memory phase all variables collect together and stores them
   val1 -> undefined
   val2 -> undefined
   addnum -> function defination
   result1 -> undefined
   result2 -> undefined

3]Execution Phase
    val1 <- 10
    val2 <- 5
    addNum --> new variable environment + execution thread ...the no.of time function executed the same no. of time this box is created which is called new execution context   (thsi box is then deleted after completion)
                                    then after that box again a)Memory phase :                       b)Execution Phase             
                                                                   val1 -> undefined                          num1 -> 10
                                                                   val2 -> undefined                          num2 -> 5
                                                                   total -> undefined                         total -> 15     ....and then return this total to global execution context

    result1 = 15
    result2 = 
*/




//call stack 


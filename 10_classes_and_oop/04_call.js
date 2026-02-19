//************************************************ call() and this **********************************************************/

function setUsername(username){
    //complex DB calls
    this.username = username 
}

function createUser(username,email,password){
    setUsername(username)    // here we give only reference of that function we not called it 

    this.email = email 
    this.password = password 
}

const chai = new createUser("Chai","chai@fb.com","123")
console.log(chai);     //output => createUser { email: 'chai@fb.com', password: '123' }

/*
 when we do above method it gives output only email and its password it not gives username ....becuase in actual the function setUsername is not called 
*/

//So to call this function we use some javascript methods that explicitly call that methods/functions we defined...seee following

function setUsername(username){
    //complex DB calls
    this.username = username 
}

function createUser(username,email,password){
    setUsername.call(this,username)    //the call() method holds the reference of userdefined method 

    this.email = email 
    this.password = password 
}

const chai1 = new createUser("Chai1","chai1@fb.com","456")
console.log(chai1);   //output => createUser { username: 'Chai', email: 'chai@fb.com', password: '123' }



/*
* CALL AND THIS
a)call()
    i)call() invokes a function by explicitly setting the value of "this".
    ii)call() is used to manually set what "this" should be.

b)this
    i)"this" refers to the object that invokes the function.
    ii)"this" depends on how a function is called, NOT where it is written.
    iii)"this" refers to the object that is calling the function.

*/
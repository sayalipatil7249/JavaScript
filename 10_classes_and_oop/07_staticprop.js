// A static member belongs to the class itself, not to object instances.

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const sayali = new User("Sayali")
console.log(sayali.createId())

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@gmail.com")
console.log(iphone.createId());


/*
    i)class is blueprint to create objects
    ii)A constructor is a special method that runs automatically when an object is created.
*/
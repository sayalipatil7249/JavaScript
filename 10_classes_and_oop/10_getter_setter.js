class User {
    constructor(email, password){
        this.email = email ,
        this.password = password 
    }
    // get password(){
    //     return this._password.toUpperCase()
    // }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
       this._email = value 
    }

    get password(){
        return `${this._password}sayali`
    }

    set password(value){
        this._password = value
    }
}

const sayali = new User("sayali@gmail.com","abc")
console.log(sayali.password);

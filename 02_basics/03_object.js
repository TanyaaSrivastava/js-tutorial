//singleton
//literals
//curly bracket is object

const mySys = Symbol("Key1")
const Juser = {
    name: "Tanya",
    age: 20,
    [mySys]:"mykey1",
    email: "tanya@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"],


}
console.log(Juser.email)
console.log(Juser["email"])
console.log(Juser[mySys])

Juser.email = "tanyaabc@gmail.com"
Object.freeze(Juser) 
Juser.email = "tanyaxyz@gmail.com"
console.log(Juser);

Juser.greetings = function(){
    console.log("Hello JS User");
}
console.log(Juser.greetings);
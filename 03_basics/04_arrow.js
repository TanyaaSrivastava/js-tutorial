const user = {
    username:"tanya",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "a"
user.welcomeMessage()
console.log(this)
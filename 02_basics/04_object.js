const tinderUser = new Object()

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedin = "false";

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"Tanya",
            lastname:"Srivastava",
        }

    } 
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",d:"4"}

const obj3= Object.assign(obj1,obj2)
console.log(obj3);
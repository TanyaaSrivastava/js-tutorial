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

//const obj3= Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
      id:1,
      email:"t@gmail.com"
    },
    {
        id:1,
        email:"t@gmail.com"
      },
      {
        id:1,
        email:"t@gmail.com"
      },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
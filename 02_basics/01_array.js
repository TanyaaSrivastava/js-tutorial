const myArr = [0,1,2,3,4,5]
const myHeroes = ["superman","policeman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));

const course = {
    coursename :"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
}
const{courseInstructor} = course
console.log(courseInstructor);
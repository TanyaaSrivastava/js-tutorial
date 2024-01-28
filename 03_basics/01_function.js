
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

sayMyName()
function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result
    console.log("Tanya");

}
const result = addTwoNumber(3,5)
console.result = addTwoNumber(5,9); 

console.log("Result:",result);

function loginUserMessage(_username){
    if(!_username){
    console.log("please enter _username");
    return
    }
    return `${_username} just logged in`
}
console.log(loginUserMessage());

function calcuateCartPrice(...num1){
               return num1
}
console.log(calcuateCartPrice(200,300,400,500))
const user = {
    username:"hitesh",
    price:199

}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
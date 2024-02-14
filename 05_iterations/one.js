for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let t = 0; t < 10; t++) {
   console.log(`Outer loop value is ${t}`);
for (let u = 0; u < 10; u++) {
    console.log(`Inner loop value is ${u} and Outer loop value is ${t}`);
    
}    
}
let myArray = ["flash" , "superman" , "batman"]
console.log(myArray.length);
for (let index = 0; index < myArray; index++) {
    const element = myArray[index];
    console.log(element);
}
for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
}
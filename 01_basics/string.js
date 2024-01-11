const name = "Tanya"
const value = 40

console.log(`This is my ${name} and my ${value}`);
const  gameName = new String('tanya-s')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newStringOne = "  tanya  "
console.log(newStringOne);
console.log(newStringOne.trim());

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
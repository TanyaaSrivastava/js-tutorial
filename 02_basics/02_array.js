const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

console.log(marvel_heros);
console.log(marvel_heros[3]);

const all_heros = marvel_heros.concat(dc)
console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc]
console.log(all_new_heros)
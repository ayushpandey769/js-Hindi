const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const DC_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(DC_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...DC_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_another_array = anotherArray.flat(Infinity)
// console.log(usable_another_array);


// console.log(Array.isArray("Harsh"));
// console.log(Array.from("Harsh"));
// console.log(Array.from({ Name : "Harsh"}));//interesting for interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

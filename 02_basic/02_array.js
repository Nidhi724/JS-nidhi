const marvelHeros = ["Ironman", "thor", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvelHeros.push(dc)
//it will create array inside array
// console.log(marvelHeros);

//concat-> combines two or more arrays wothout modifying the existing array

// const allHeros = marvelHeros.concat(dc)
// console.log(allHeros);


//  [... , ...]-> used to merge
const all_new_heros = [...marvelHeros,...dc]
// console.log(all_new_heros);

//flat()-> returns a new array with all sub array elements concatenated into it

const another_array = [1, 2, 3, 4, 5, 6, 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Nidhi"));
console.log(Array.from("Nidhi"));
//from -> is used to create an new array

console.log(Array.from({name : "Nidhi"})); // intresting it will return an empty array

//of is also used to cretae an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

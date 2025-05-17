const name = "Nidhi"
const repoCount = 50
console.log(`My name is ${name} and My repoCount is ${repoCount}` );

const gameName = new String('Nid-hi') //String is obj

console.log(gameName[0]);//acces the index element in string
console.log(gameName.__proto__);
console.log(gameName.charAt(2));//finds the char at 2 inedex
console.log(gameName.indexOf('d'));//finds index of the given character
console.log(gameName.toUpperCase());//convert whole string in upper case
console.log(gameName.length);//finds the length of string

const newStirng = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName = gameName.slice(-8,4)
console.log(anotherString);

//trim() removes the white spaces

//replace() use to replace
//include() use to check whether the given text is present or not
//split() is used to convert string into array
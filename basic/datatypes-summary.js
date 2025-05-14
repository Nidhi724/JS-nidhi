/* datatype has been dived on th basis of how to store and how do we access that
// JavaScript is a dynamic language we never define language type in js
//Primitive 

// 7 types : String, NUmber, Boolean, null->object,undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


const bigNumber = 3456543576654356754n

/*
//Reference (Non Primitive)
//Array, Objects,Functions
*/ 


const heros = ["shaktiman", "naagraj" , "doga"];
let myObj = {
    name: "Nidhi",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

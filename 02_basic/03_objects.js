//Objects in js can be declared inn two ways (i)Literals (ii)Constructor
// only difference in two of ways of singleton
//Singleton -> any constructor will create a single object
// when we declare with literals then singleton will not created


// in object we can define keys + value but in array we can't define 


// object.create is a constructor method for creating a object with singleton


// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Nidhi",
    [mySym]: "mykey1", // to use symbol in object use[]
    age: 20,
    location: "Bihar",
    email: "nknidhi571@gmail.com",
    isLoggedIn: false,
    lastLogingDyas: ["Monday", "Staurday"]
}

//Access 
// To access any elemnt in an object we should use [" "] this method because by using . method we can't get the exact datatype because in object everthing is declared in string dt
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// modify
JsUser.email = "nknidhi571@google.com"

// Freeze -> after this no more modification can made
// Object.freeze(JsUser)
JsUser.email = "nknidhi571@chatGpt.com"
// console.log(JsUser);

// function
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
    //this-> used to reference the same object
}

//console.log(JsUser.greeting); 
//-> this will just give that there is a function 
console.log(JsUser.greeting()); 
//-> this will give u return
console.log(JsUser.greetingTwo());


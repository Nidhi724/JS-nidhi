// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("D");
//     console.log("H");
//     console.log("I");
    
// }
// //sayMyName -> only this showa th reference of the function and to execute we need to add ()
// sayMyName()


// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// const result = addTwoNumbers(3,4)
// console.log("Result : ", result);
// here Result : undefined because here we have not return any value that's why it show undefined

// function addTwoNumbers(num1, num2){
//     let result = num1+num2
//     console.log(result);
//     return result
//     // return num1+num2
    
// }
// const result= addTwoNumbers(4,5)
// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Nidhi"))
// console.log(loginUserMessage())
// //->this shows undefined when we don't pass any argument


// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500))
//print it in array[200,300,400,500]


// const user = { 
//     userName: "Nidhi",
//     price:100
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
    
// }
//handleObject(user)
//here it is compulsory to pass only object name
// handleObject({
//     userName: "Sam",
//     price: 399
// })

// const myNewArray = [200,300,400,500]
// function returnSecondValue(getArray){
//     return  getArray[1]
// }
// console.log(returnSecondValue([200,300,400,500]));


//scope in ide and browser are different



// this keyword is used to give knowledege of current context
// this refers to the object that calls the function (runtime binding)
// const user = {
//     username: "Nidhi",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
        
//     }

// }

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

//-> this shows{} because we are currently in node environment
// but in browser it shows windows as window is an global object for browser


// function chai(){
//     //console.log(this);
//     //it shows all the values
//     // we cannot use this inside the function it can be used inside the object
//     let username= "Nidhi"
//     console.log(this.username); // this gives undefined value as a result
    
// }
//chai()


// ////// ARROW FUNCTION

// const chai = () => {
//     let username = " Nidhi"
//     console.log(this.username);
    
// }

// chai()

// explict arrow func -> return keyword used
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// } 
// console.log(addTwo(3,4))
// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3,4))-> implicit arrow func



// ++++++++++++++++++++++++++++++Control flow+++++++++++++++++++++++++++++

// IF
// if(true){
// //code execute
// }
// if(false){
// // code doesn't execute
// }

//  <, >, <=, >=, ==, !=, ===(checks the type of also eg: 2 === "2"), !==

// const temp = 41

// if(temp < 50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");
// }

// const score = 200
// if (score>100){
//     const power = "fly"
//     // here it throws error coz const is not accessible to outside world
//     //  so we should use let or const we should not use var (coz var does not thrrow error and is accessible to outside world)
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);

// const balance = 1000
// if(balance>500) console.log("test");
// implicit way 
// we can write code like in multiple lines which is not a good readale code we can write using (,)

// if(balance < 500) {
//     console.log("less than 500");
    
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200")
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log(("User looged in"));
    
// }

// Switch

// switch (key) { //key= to the value which we want to check
//     case value:
        
//         break;

//     default:
//         break;
// }

//const month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
    
//         break;
// }
// if we does not apply break it will match all the above except default

// const userEmail = "Nidhi.ai"
// if(userEmail){
//     console.log("Got user email");
    
// }
// else{
//     console.log("Don't have user email");
    
// }

// falsy values
// -> false, 0, -0,BigInt on, "", null, undefined, NaN

// truthy values
// -> "0", 'false', " ", [], {}, function(){}

// const userEmail = []
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }
// const emptyObj = {}
// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
// is used to provide a default value when a variable is either null or undefined

// let val1;
// val1 = 5?? 10
// console.log(val1);

// val2 =null?? 10
// console.log(val2);


// Terniary Operator

// Condition? true : false
// const iceTeaPrice = 100
// iceTeaPrice <=80 ?console.log("less than 80") : console.log("greater than 80");

// ++++++++++++++    LOOPS    ++++++++++++++++++++

//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best no");
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop values ${i}`);
    
//    for (let j = 0; j < 10; j++) {
//     console.log(`Inner loop values ${j}  and inner loop ${i}`);
    
    
//    }
// }

// let myArray = ["Anant", "Geeta", "Nidhi", "Radha", "Naitik"]
// for (let index = 0; index <myArray.length; index++) {
//     const element =myArray[index];
//     console.log(element);
    
// }


// break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break //-> to break any conttol flow we need break
//     }
  
    
//     console.log(`value of i is ${index}`);
    
    
// }
// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         continue //-> to ignore any conttol flow we need continue
//     }
  
    
//     console.log(`value of i is ${index}`);
    
    
// }

// ++++++++++++++++++++++ While do while +++++++++++++++++++


//while 

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index +2
// }

//do while

// let score = 11
// do {
//     console.log(`Score is ${score}`);
//     score ++
// } while (score<= 10);


//++++++++++++++++++++++++++ high order Array Loop +++++++++++++++++++++

// ARRAY SPECIFIC LOOP
//for of

// for (const element of object) {
    
// }
// element/ iterartor -> i,j,k...
// object-> on which the loop is applied

// const arr = [ 1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// Maps-> is a obj used for unique values

// const map = new Map()
// map.set('In', "India")
// map.set('USA', "Unites States of America")
// map.set('FR', "France")

//console.log(map);

// for (const key of map) {
//    console.log(key);
    
// }
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// for each loop does not work for Object
// for that we require for in loop
// const myObject = {
//     js: 'JavaScript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

// const programming = ["js", "rb", "cpp", "java", "cpp"]
// for(const key in programming){
//     console.log(key);
// }

// for in loop always works for array return keys
// but for each loop return values


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// for (const key in map){
//     console.log(key);
    
// }

// doesn't provide any output because it is not iterable

//for each loop

// const coding = ["js", "ruby", "java", "cpp", "swift"]
// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index,arr) => {
//     console.log(item,index, arr);
    
// })

// const myCoding = [
//     {
//         languageNmae: "javaScript",
//         languageFileName: "js"
//     },
//     {
//         languageNmae: "Python",
//         languageFileName: "py"
//     },
//     {
//         languageNmae: "C++",
//         languageFileName: "cpp"
//     },
//     {
//         languageNmae: "Ruby",
//         languageFileName: "rb"
//     }
    
// ]
// myCoding.forEach( (item) => {
// console.log(item.languageFileName);

// })

//const coding = ["js", "ruby", "java", "cpp", "swift"]

// const values = coding.forEach( (item)=> {
//     // for each doesnot return any value
//  //console.log(item);
//  return item
// })
// console.log(values);

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// filter , Map , Reduce


//const newNums = myNums.filter((num) => num> 4)
// // => gives output [ 5, 6, 7, 8, 9, 10 ]
// const newNums = myNums.filter((num) => {
//     num> 4}) //=> this will give []
// const newNums = myNums.filter((num) => {
//     return num> 4
// } )

// // if we open scopr then we require return keyword and if we dont open scope we dont require return keyword

// const newNums = []
// myNums.forEach(( num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



//const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// //const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) => {return num + 10})
// console.log(newNums);


// Chaining -> use two or more methods ata same time

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
// console.log(newNums);

//reduce 

//const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
    
// }, 0)

//  output => acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

// const myTotal = myNums.reduce( ( acc, curr) => acc+ curr , 0)
// console.log(myTotal);
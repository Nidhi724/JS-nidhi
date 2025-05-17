let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleString);

console.log(typeof myDtae);//object

let myCreatedDatee = new Date(2025,5,17)
console.log(myCreatedDatee,toDateString());

let myCreatedDate = new Date("2025-05-17")
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDatee.getTime());
// console.log(Math.floor(Date.now()/1000)); ->convert date in sec


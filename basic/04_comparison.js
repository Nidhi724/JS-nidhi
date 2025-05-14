console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2" > 1);
// doesnot allow to compare two different datatype

console.log(null >0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparisons >< >= <= work differently.
// comparison convert null to a number , treating it as 0.That's why (3) null>= 0 is true and (1) null>0 is false
// undefined provide false in every case


// === -> Strict check checks the dataType and then it will work

console.log("2" === 2);








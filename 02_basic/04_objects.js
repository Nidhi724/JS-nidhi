// const tinderUSer = new Object()
//both will provide output {} as a single object 
//only difference is that above one is a singleton object and other is not
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nidhi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser= {
    email: "nidhi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nidhi",
            lastname: "Kumari"
        }
    }
}

// console.log(regularUser.email);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1,obj2} -> arries same problem as arrosed in array
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

//used in database

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//to check the property exits or not use hasOwnProperty()

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//how to destructure the object we can also destruvture the array but it is very rare
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor : instructor} = course
console.log(instructor);

//API can be also in form of array object

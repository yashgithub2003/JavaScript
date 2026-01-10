// Objects in Javascript

// Object literals

const mysbl = Symbol("key1")

const obj = {
    name : "Yash",
    [mysbl] : "MyK1",
    age : 21,
    "email" : "yashadke2003@gmail.com"
}

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["email"]);
// console.log(obj[mysbl]);
// console.log(typeof obj[mysbl]);

// Object.freeze(obj); // freeze any changes in value
// obj.email = "Yash"
// console.log(obj);


// obj.greeting = function (){
//     console.log("Welcome");
    
// }
// obj.greeting()
// obj.greeting2 = function (){
//     console.log(`In this my email is ${this.email}`);
    
// }
// obj.greeting2()


//Second method to declare objects

// const objj = new Object() //singleton object

// const obj1 = { 1 : "a", 2 : "bf"}
// const obj2 = { 3 : "adf", 4 : "bv"}
// const obj3 = { 5 : "adfg", 6 : "bdf"}

// // const finalObj = Object.assign({},obj1,obj2,obj3)
// const finalObj = { ...obj1,...obj2,...obj3}

// // console.log(finalObj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj)); // convert key-value into a array like [[key,value],...]

// console.log(obj.hasOwnProperty("name")); // true




// ================= de-structring objects =================

// const course = {
//     coursename : "JS",
//     price : 299,
//     courseInstructor : "Amay"
// }

// const {courseInstructor : instructor ,price } = course
// console.log(instructor,price);




//  =================== JSON =================
// {
//     "coursename" : "JS",
//     "price" : 299,
//     "courseInstructor" : "Amay"
// }

// [
//     {},
//     {}
// ]
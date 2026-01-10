// ================ Functions ===================

// function demo(){
//     console.log("Hello");
// }
// demo()

// function demo(...num1){
//     return num1
// }
// console.log(demo(100,200,300,400))


// function demo(obj){
//     console.log(`Name is ${obj.name} and age is ${obj.age}`);
// }
// demo({
//     name : "Yash",
//     age : 21})

// const arrrr = [1,24,5,6,4,5]
// function demo(arr){
//     return arr[1]
// }
// console.log(demo(arrrr))


// ================== Scope =====================

// if (true){
//     let a = 10
//     const b = 20
//     var c = 32
// }
// console.log(a);
// console.log(b);
// console.log(c);

//  ================ THIS AND ARROW FUNCTION ===============

// let obj = {
//     name : "Yash",
//     fnn : function(){
//         console.log(`Welcome ${this.name}`)
//     }
// }
// obj.fnn()

// const chai = () => {
//     let user = "Yash"
//     console.log(user);
// }
// chai()

// const addTwo = (num1) => num1 + 2
// const addTwo = (num1) => (num1 + 2)
// console.log(addTwo(19));


// Immediately Invoked Function Expressions(IIFE)
// execute the function immediately when funtion is written

// (function demo(){
//     // named IIFE
//     console.log("Connected Instantly");
// })();

// (() =>{console.log("Connected Instantly");})();



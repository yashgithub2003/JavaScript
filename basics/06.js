// const a = 10
// if (a<10){
//     console.log("Less than 10");
// }else if (a == 10) {
//     console.log("value is 10");
// }else {
//     console.log("Value is greater than 10");  
// }

// const day = "Mon"
// switch (day) {
//     case "Mon":
//         console.log("Monday");
//         break;
//     case "Tues":
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Enter Correct");       
//         break;
// } 


//  for (let index = 0; index < 10; index++) {
//     console.log(index+1);
//  }


// let n = 0
// while (n < 5) {
//     console.log(n+1);
//     n = n + 1;
    
// }

// do {
//     console.log(n+1);
//     n++
// } while (n<5);



// ============ for of ===============
// let name = "Ya sh"
// for (const val of name) {
//     console.log(`Char is ${val}`);
// }



// ============Map===============
// show key value pair data

// let map = new Map()
// map.set('IN','India')
// map.set('US','United State')

// console.log(map);


// ============= for in ===============
// const obj = {
//     name : "Yash",
//     age : 21,
//     city : "Pune"
// }
// for (const key in obj) {
//     console.log(`key : ${key} and value is ${obj[key]}`);
// }

// const arr = [1,2,3,4,5]
// arr.forEach(function (val) {
//     console.log(val);}
// )

// const arr1 = [1,2,3,4,5]
// arr1.forEach((val,index,arr) =>  {
//     console.log(val,index,arr);}
// )
// 


// ================ Filter ================
let num = [1,2,3,4,5,6,7,8,9,10]

// let newNum = num.filter((n) => n> 4)
// console.log(newNum);

// ============== map ==============
// let newNum = num.map((n) => n + 4)
// console.log(newNum);

// =============== reduce ================
let newNum = num.reduce((acc,curval) => (acc+curval),0)
console.log(newNum);

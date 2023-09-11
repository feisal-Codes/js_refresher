const  SCRIPTS= require("./data")

/** 
higher order functions

these are functions that take other functions as 
arguement or return them 
eg
function greaterThan(n) {
return m => m > n;
}
;
// → true
*/

function greaterThan(n){
  console.log("this is n", n)
  return (m)=> {
    console.log("this is m and n", m, n)
    return m > n}
}
// let greaterThan10 = greaterThan(10);
// console.log("here",greaterThan10)
// console.log(greaterThan10(11))

/** 
closures -> this is a mechanism tht allow inner functions 
to remember and access the variables and data of outer functions even after 
the outer function has finished executing 
 */

function addToLastDigit(old){
  const val = old
  return (current)=>current+ val
}

//outer function finished excuting
//invokes returned function that remembers old value from
//outer function
const add= addToLastDigit(20);
// console.log(add(30))
// console.log(addToLastDigit(20)(10))
// const add1= addToLastDigit(30);
// console.log(add1(40))

// console.log(add1(50))//100
// console.log(add1(60))//110

function noisy(fn){
  return (...args)=>{
    console.log(args)
    let result=fn(...args)
    console.log(...args)
    return result
  }
}

// console.log(noisy(Math.max)(2,5,10))

// let res= noisy(Math.min)
// console.log(res(1,2,3))

//WRITE A FUNCTION TO FILTER DATA


// function filter(array, test){
// let passed=[]
// for(let element of array){
//   if(test(element)){
//     passed.push(element)
//   }
// }
// return passed
  
// }

// let res=filter(SCRIPTS, (script)=>script.living)
// console.log(res)
let filtered= SCRIPTS.filter(s =>s.direction == "rtl")
// console.log(filtered)

//map function

// function map(array,transform){
//   let mapped=[]
//   for(let element of array){
   
//       mapped.push(transform(element).toUpperCase())
    
//   }
//   return mapped
// }

// let arr= map(filtered, (script)=>script.name)
// console.log(filtered.length)
// console.log(arr.length)
// console.log(arr)

let arr= filtered.map(s=>({...s, name:null}))
// console.log(arr)

// function reduce(array,combine,start){
//   let current=start
//   for(let element of array ){
//    current += combine(start,element)
//   }

//   return current

  
// }

// const combine=(a,b)=>a+b
// let res= reduce([1,2,3,4,5,6],combine,0)
// console.log(res)
let sum= [1,2,3,4,5].reduce((a,b)=>a+b,1)

//function that finds average year

function average(array){
  return array.reduce((a,b)=>a+b)/array.length
}

let living = Math.round(average(SCRIPTS.filter(s=>s.living).map(s=>s.year)))

let dead= Math.round(average(SCRIPTS.filter(s=>!s.living).map(s=>s.year)))

console.log("living: ", living," dead:",dead)

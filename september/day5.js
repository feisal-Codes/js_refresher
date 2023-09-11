/** 
Use the reduce method in combination with the concat method to “flat-
ten” an array of arrays into a single array that has all the elements of
the original arrays

[[1,2],[2,3,4],[3,6,7],[2]]
[1,2,2,3,4,3,6,7,2]
*/
 // let arr=[[1,2],[2,3,4],[3,6,7],[2]]
 // let res= arr.reduce((a,b)=>a.concat(b),[])
// console.log(res)
/** 
Write a higher-order function loop that provides something like a for
loop statement. It takes a value, a test function, an update function,
and a body function. Each iteration, it first runs the test function on
the current loop value and stops if that returns false. Then it calls the
body function, giving it the current value. Finally, it calls the update
function to create a new value and starts from the beginning.
When defining the function, you can use a regular loop to do the
actual looping
*/

function repeat(start,test,update,body){
  for(let value=start; test(value); value=update(value)){
    body(value)
  }
}

// repeat(3, n => n > 0, n => n - 1, console.log)

/** 
some method: array method that takes in a function and calls
each element of the array applies the function to it 
it returns true if any element in the array meets the condition otherweise it returns false
*/

const arr= [1,3,5,7,9]

//check for even numbers in array

function iseven(array){
  for(let i=0; i<array.length; i++){
    if(array[i] % 2===0){
      return true
    }
  }

  return false
}

// console.log(iseven(arr))

let even= arr.every((element)=>element % 2 !== 0)
// console.log(even)

function every(array,fn){
 //checks all the elements in an array , returns true if all elements
  // meets a specific condition otherwise returns false 
   
   for(let i=0; i<array.length; i++){
     if(!fn(array[i])){
       return false
     }
    
   }

  return true
  }
  
  // if(ngv == pos){
  //     return true

  // }
  // else {
  //   return false
  // }



const fn=(element)=> element % 2 !== 0  ? true : false

// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10))
// console.log(every([], n => n < 10));
// console.log(isodd([1,3,5,7]))
// const arr3=[2,4,7,60]
// const isodd= !arr3.some((element)=>element % 2 !== 0 ? true : false)
// console.log(isodd)

/** 
oop
*/
const myobj={
  type:"helpers",
  log(){
     console.log(this.type)
}
}



myobj.log()
const func= myobj.log
  func()





















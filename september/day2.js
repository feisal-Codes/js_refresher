// functions 
// three ways to declare functions in js
/*
function  declaration
with function declaration u can invoke the function bfre you declare it,
it does not follow top to bottom approach as all the function  declartion are moved to the top upon running the  program
*/



function sum(a,b){
  return a+b
}

const sum1= function(a,b){
  return a+b
}

//we use arrow functions for anynomous functions 

const sum2=(a,b)=>{
  return a+b
}

// console.log(sum2(1,2))


//optional params 

function power(base, exponent=2){
  return base*=exponent
  
}

//factorial

//factorial of 6= 6*5*4*3*2*1

function factorial(n){
  if(n==1){
    return  n
  }
  console.log("this is n",n)
  let answer= n *  factorial(n-1)
  console.log("everytime,", answer)
  return answer
}

// console.log(power(6))

function multiplier(factor) {
console.log(factor)
return number => number * factor;
}
// console.log(multiplier(2));
// let twice= multiplier(8)
// console.log(twice(2))

//growing functions

function printZeroPaddedWithLabel(number, label){
  let labelString=String(number)
  if(labelString.length<3){
    labelString=`0${labelString}`
  }
  console.log(`${labelString}  ${label}`)
}

function printFarmInventory(cows, chickens, pigs) {
printZeroPaddedWithLabel(cows, "Cows");
printZeroPaddedWithLabel(chickens, "Chickens");
printZeroPaddedWithLabel(pigs, "Pigs");
}

// printFarmInventory(7,  3);

//011 chicken
//123 goats

/** 

exercise: 
Write a function min that 
takes two arguments and returns their minimum

*/

function minimum(...numbers){
  if(numbers.length<1){
    return "pass in at least two values"
  }
  let min=numbers[0]
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]<min){
      min=numbers[i]
    }
  }
  return min


  
}

// console.log(minimum(9,10,6,7,9,3))
/** 

exercise:
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to see whether it’s divisible by
two. Here’s another way to define whether a positive whole number is
even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole num-
ber) and return a Boolean.

*/

function isEven(number){
  if(number<0){
    return "provide a positive number"
  }
  if(number==1){
    return false
  }
  else if(number==0){
    return true
  }
  else {
     return isEven(number-2)
  }
}

// console.log(isEven(8))

/**
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string.

*/
/** 
function countBs(string){
  let count=0
   for(let i=0; i<string.length; i++){
         if(string[i] === "B"){
           count+=1
         }
     
   }

  return count
}
*/
/** 

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is
to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/

function countChar(string, char){
  let count=0
   for(let i=0; i<string.length; i++){
         if(string[i] === char){
           count+=1
         }
     
   }

  return count
}

function countBs(string,char){
  return countChar(string,char)
}

// const myfn= countBs("baBaBAB","B")
// console.log(myfn)


//array methods
/** 
push => adds an element to the end of an array
pop  => removes an element from the end  of an array
shift => removes an element from the start of an array
unshift=adds an element to the start of an array
indexOf= returns the index of an element in an array
lastIndexOf= counts from the last element and returns the index of an element of an array
slice = takes two arguement, the first arguemnt is inclusive, the second is exclusive, returns a portion of an array given the start and end , if given only one arguement it returns from the first arguement to the last

*/

function remove(array,index){
  return array.slice(0,index).concat(array.slice(index+1))
}

// console.log(remove(["a","b","t","g","r","y"],3))

/** 

Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and
including) end.*/

function range(start,end,step=1){
  const arr=[]
  if(step<0){
  
    for(let  i=start; i >= end; i+=step){
      console.log("this is i: ", i)
      arr.push(i)
  }
    console.log(arr)
  }
    else{
      for(let  i=start; i<=end; i+=step){
      arr.push(i)
  }
    }
    
  

  return arr
}

// console.log(range(8,10))
/** 
write a sum function that takes an array of numbers and returns
the sum of these numbers
*/
function sum(args){
  let result=0
  for(let number of args){
    result+=number
  }
  return result
}

// console.log(sum(range(5, 2, -1)))

/** 
For this exercise, write two func-
tions, reverseArray and reverseArrayInPlace. The first, reverseArray,
takes an array as argument and produces a new array that has the
same elements in the inverse order. The second, reverseArrayInPlace,
does what the reverse method does: it modifies the array given as argu-
ment by reversing its elements. Neither may use the standard reverse
method.

*/

function reverseArray(arr){
  let reverse= []
  for(let i=arr.length-1; i>=0; i--){
    reverse.push(arr[i])
  }
  return reverse
}
// let arrnumber=range(1,10)
// function reverseArrayInPlace(arr){
//   let reverse= []
//   for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i])
//   }
//   arrnumber=reverse
// }

// console.log(reverseArrayInPlace(arrnumber))
// console.log(arrnumber)

//arrayToList 
//given [1,2,3]
//return 
/** 
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}
}
};
*/

// function arrayToList(arr){
//  let list=null
//  for( i = arr.length-1; i >= 0; i-- ){
//    console.log(list)
//     list = { value: arr[i], rest: list };
//    //the rest property of the new object list is assigned the 
//    //previous list
//  }
//    return list
   
  
// }

function arrayToList(arr){
  let list=null
  for(let i=arr.length-1; i>=0; i--){
    list={value:arr[i], rest:list}
    //list =null
    //value 3
    //value=2
    //list={value:3, rest:null}
    //list={value:2, rest:{value:3, rest:null}}
    //list ={value:1, rest:{value:2, rest:{value:3,rest:null}}}
  }


  
  return list
}




// console.log(arrayToList([1,2,3]))

function listToArray( list ) {
  let array = [];

 for(let obj=list; obj; obj=obj.rest ){
   console.log(obj)
   array.push(obj.value)
 }

    return array;
}
let ls={ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
// console.log(listToArray(ls))

function prepend(list,node){
  let newList={value:node, rest:list}
  return newList
  
}

// console.log(prepend(ls,5))

function nths(list,number){
  // return listToArray(list)[number]
  if(list.rest==null){
    return "undefined"
  }
  if(number==0){
    return list.value
  }
  if(list.value == number){
    return list.rest.value
  }

  return nths(list.rest,number)
// 
 ;
}

// console.log(nths(ls,20   ))


function deepEqual(val1,val2){
  if(typeof val1 !== "object"  && typeof val2 !== "object"){
    if(val1 ===val2){
      return true
    }
    else{
      return false
    }
  }


  if(val1 === null || val2===null){
    return "null values"
  }

  else {
   let arr= Object.keys(val1)
    console.log(arr)
   for(let i=0; i<arr.length ; i++){
     if(!val2[arr[i]]){
       console.log(val2[arr[i]])
       return false
     }
    
   }
  }

  return true
  
}

console.log(deepEqual({a:"a",b:"2"},{a:"a",b:"b"}))
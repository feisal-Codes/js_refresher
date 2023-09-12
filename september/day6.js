//classes and oop in javascript

class person{
  constructor(name,gender){
    this.name=name
    this.gender=gender
    this.age=0
  }

  greeting(){
    console.log("hello "+ this.name +" your gender is "+ this.gender)
  }

  
}

// const person1= new person("feisal","male")
// console.log(person1.age)
// person1.greeting()


//graphs data structures 
//graphs are data structures that are used to show
//how things are connected
//its use case include: 
//path finding
//movie and friend recommendation
//social media followers 

//graphs have vertices and edges
//vertices represent things or players or places  in a graph
//edges is the connection between two persons or things or places 
//connections are two ways 



const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

function buildgraph(edges){

  const graph= {}

  function addedge(from,to){
    if(graph[from]==null){
      graph[from]=[to]
    }
    else{
      graph[from].push(to)
    }
  }

  let arr= edges.map((element)=>element.split("-"))
  console.log(arr)
  console.log([from,to]=arr[0])
  for(let [from, to] of arr){
    addedge(from,to)
    addedge(to,from)
  }

  return graph
  
}

// console.log(buildgraph(["feisal-mohamed","feisal-abdi", "feisal-gedi", "mohamed-yussuf"]))

//fibbonaci series 
//fib(0)=0
//fib(1)=1
//fib(2)=1
//let us say we want to find the first 20 numbers of the 
//fibonnaci sequence
//each fibonaci number is the sum of the previos two
//fib of 0 is 0
//and fib of 1 is 1
function fib(n){
  let fib_arr=[0,1,1]
  for(let i=3; i<=n; i++){
    fib_arr[i]=fib_arr[i-1]+ fib_arr[i-2]
  }

  return fib_arr[20]
}


// console.log(fib(20))

//using recursion 

//base case = n<3?1

let arr=[]
function fib_recur(n){

  if(n<=0){
    return []
  }
  else if(n===1){
    return [1]
  }
    else if(n===2){
      return [1,1]
    }
  else {
    let seq = fib_recur(n-1)
    console.log("this is n", n , "returned array" ,seq)
    seq.push(seq[seq.length-1]+ seq[seq.length-2])
   return seq
  }
}

// console.log(fib_recur(5))

//add element to the start of an array

//shift all the elements to the right 

// function unshift(array,element){
//   for(let i=array.length; i>=0; i--){
    
//     array[i]=array[i-1]
//   }
//   array[0]=element

//   return array;
// }

// function unshift(array, ...elements){
//   return [...elements, ...array]
// }

function unshift(array, ...elements){
  const newarr=[]

  //popuplate the new array 
  for(let i=0; i<elements.length; i++){
    newarr[i]= elements[i]
  }

  for(let i=0; i<array.length; i++){
    newarr[elements.length+i]= array[i]
  }

  return newarr
  
}



let numbers=[1,2,3,4,5,6,7,8,9]
// console.log(numbers[numbers.length])
// console.log(unshift(numbers, 30,3,4,-1))

/**
arrays methods:
push-add an element to the end
unshift- add an element at the start
shift- remove element from begining of an array
*/

function shift(array){
  const lst=array[array.length-1]
  for(let i=0; i < array.length-1; i++){
    array[i]=array[i+1]
   }
  array.length-=1
  return array
}

function shift_spread(array){
  let arr=[ist, ...rest]= array
  return [...rest]
}

//[1,2,3,4,5,6]


// console.log(slice([1,2,3,4,5,6],3))

//1,2,3 4 5 6 7 8 9
// console.log(Math.min(-5,0))
// console.log(shift(numbers))

//sort a given array
//input => [2,4,1,7,3,5]
//output= > [1,2,3,4,5,7]
//4,5,3,1,7,3,5
  //4,3,1,5,3,5,7
  //4,1,5,3,3,5,7
  //1,4,3,3,5,5,7
  //1,3,3,4,5,5,7
//bubble sort
function sort(array){
let swapped=true
  while(swapped){
    swapped=false
  
 for(let i=0; i<array.length; i++){
   if(array[i+1]<array[i]){
     let temp=array[i+1]
     array[i+1]=array[i]
     array[i] = temp
     swapped=true

   }
   
 }

  }
  
  return array
}


console.log(sort([4,5,1,7,3]))
//4 n 5
//5 n 1 = 4,1,5
// 7 n 3 = 4,1,5,3,7
//1,4,3,












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

console.log(buildgraph(["feisal-mohamed","feisal-abdi", "feisal-gedi", "mohamed-yussuf"]))

















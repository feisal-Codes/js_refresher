/**  implement a function that takes a column and row
      and returns a matrix 
      row= 3 
      col= 2 
      return 
      [[][]]
      [][]
    
      [row][row]
      [row][row]
      [row][row]
      

*/

function matrix(row, col){
  const matrix=[]
  for(let i=0; i < row; i++){
    for(let j=0; j < col; j++){
      if(matrix[i]){
          matrix[i].push("")
      }
      else{
      matrix[i]=[""]

      }
      
      
    }
  }
  return matrix
}

function threeDimensional(row, col, depth){
  const matrix=[]
  for(let i=0; i < row; i++){
    matrix[i]=[]
    for(let j=0; j < col; j++){
      matrix[i][j]=[]
      for(let k=0; k<depth; k++){
          matrix[i][j][k]=""
     
      }
      
      
    }
  }
  return matrix
}


function printMatrix(matrix){
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      console.log(matrix[i][j])
    }
  }
  // console.log(matrix)
}
//[[1,2],[3,4],[5,6]]

// function drawBoard(){
//   const board= matrix(2,6)
//   console.log(board)
// }
// drawBoard()

//day 1

const averageTemp= matrix(2,6)
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
// averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;


// console.log(averageTemp)

// printMatrix(averageTemp)
// console.log(threeDimensional(2,3,4))

function create3DArray(depth, row, col) {
  const array3D = [];

  for (let i = 0; i < depth; i++) {
    array3D[i] = [];
    for (let j = 0; j < row; j++) {
      array3D[i][j] = [];
      for (let k = 0; k < col; k++) {
        array3D[i][j][k] = "";
      }
    }
  }

  return array3D;
}


      //functions provided by js

//sort 
//of
//from
//fill

let numbers= Array.of(5,5,6,1,2,3,4)
let num= Array.from(numbers)
// console.log(num)
// console.log(numbers)

const sorted_arr= numbers.sort((a,b)=>b-a)
console.log(sorted_arr)

//custom sorting 

let friends = [
{name: 'John', age: 30},
{name: 'Ana', age: 20},
{name: 'Chris', age: 25}
];

let s_friends= friends.sort((a,b)=> a.age - b.age)
console.log(s_friends)

//strings


// let names =['Ana', 'ana', 'john', 'John'];
// const sorted_names= names.sort((a,b)=>a- b)

// console.log(names)
// console.log(sorted_names)
var names =['Ana', 'ana', 'john', 'John'];
console.log(names.sort((a,b)=>a-b))
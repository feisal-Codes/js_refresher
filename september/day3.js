//write a function that takes an array of values
//and searches an array of object if a certain value is 
//present
// let val1= prompt("enter value")
const books=[
  {title:"harry potter", year:"1956",pages:"60"},
    {title:"harry potter", year:"1500",pages:"40"},
    {title:"jane ayre",year:"2001",pages:"60"}
]


function search(query,books){
  //check for a single search
 // const filtered = books.filter((book)=>{
  
 //   let isTitle = 
 //  book.title.toLowerCase().includes(query.title.toLowerCase())
 //   let isYear=book.year.includes(query.year) 
 //   let isPages=book.pages.includes(query.pages)
 //   console.log("title and year and pages", isTitle, isYear, isPages)
 //   return isTitle && isYear && isPages
   
   
  

   
   
 // })
  const filtered = books.filter((book) => {
    let isTitle = query.title === "" || 
    book.title.toLowerCase().includes(query.title.toLowerCase());
    let isYear = query.year === "" || 
    book.year.includes(query.year);
    let isPages = query.pages === "" || book.pages.includes(query.pages);
    return isTitle && isYear && isPages;
});


  console.log(filtered)

}

const searchObj={
  title:"",
  year:"",
  pages:""
}

search(searchObj,books)
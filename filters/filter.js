const nums=[1,2,3,4,5,6,7,8,9,10]
// nums.filter((num)=>num>4) //This will return values greater than 4 but but will not store or print
// const newnums=nums.filter((num)=>num>4) //This will stores in newnums
// console.log(newnums)

//Another way to use
// const newnums=nums.filter((num)=>{
//     return num>4
// })
// console.log(newnums)

//Using for each loop
// const newnums=[]
// nums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums)

//filters on books
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

//const userbooks = books.filter((book)=>book.genre==='History')
//const userbooks = books.filter((book)=>book.publish>=2000)//OR const userbooks = books.filter((book)=>{return book.publish>=2000})
const userbooks = books.filter((book)=>{
    return book.publish>=1995 && book.genre==='History'
})
console.log(userbooks)
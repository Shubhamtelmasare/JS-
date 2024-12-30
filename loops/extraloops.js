// const arr=[1,2,3,4,5,6,7,8,9,10]
// //for off loop
// for (const num of arr) {
//     console.log(num)
// }
// const greeting="Hello World"
// for (const greet of greeting) {
//     if(greet==" ") continue
//     console.log(`Character in Hello World are ${greet}`)
// }

const map=new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('FR',"France")
map.set('TH',"Thailand")
map.set('IN',"India") //map only takes unique values it will not print india twice
//console.log(map)

// for (const key of map) {
//   console.log(key)  
// }
// for (const [key,values] of map) { //destructuring of array
//     console.log(`${key} : ${values}`)
// }


//forin loop
const myobj={
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myobj) {
    //console.log(key) This will print only keys
    //console.log(myobj[key]) This will print only values
    //console.log(`${key} shortcut is for ${myobj[key]}`)
}

const programing=["js","c","cpp","py","java"]
for (const key in programing) {
    //console.log(key) for keys
    //console.log(programing[key]) for values
}

//forEach loop
const programingL=["js","c","cpp","py","java"]
// programingL.forEach(function (val){
//     console.log(val)
// })
// programingL.forEach((item)=>{
//     console.log(item)
// })
// function printme(item){
//     console.log(item)
// }
// programingL.forEach(printme)
// programingL.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const coding=[
    {
        languagename:"javascript",
        filename:".js"
    },
    {
        languagename:"C",
        filename:".c"
    },
    {
        languagename:"java",
        filename:".java"
    }
]

coding.forEach((item)=>{
    console.log(item.languagename);
})
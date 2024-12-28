function addnum(val1,val2,...num){// "..."->This is called rest operatorfirst two values will be stored in val1 and val2 and remaining will be stored in array named num
    return num;
}
console.log(addnum(1,1.1,12,1,21.,1,21.2))

//Passing object to the function
function handleobject(obj){
    console.log(`Username is ${obj.name} and price is ${obj.price}`)
}
// Passing object manually
// const obj={
//     price:99,
//     name:"Shubh"
// }
// handleobject(obj)

//Passing object directly
handleobject({
    name:"Shubh",
    price:99
})

// Passing Array
const myarr=[110,300,350,400,450]
function retsec(arr){
    return arr[2]
}
console.log(retsec(myarr))
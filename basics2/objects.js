const mysym = Symbol("key")
const obj={
    name :"Shubh",
    "full name" : "Shubham Telmasare",
    mysym : "mykey",//This will be used as string
    [mysym] : "mykey",
    age :21,
    city :"Nagpur",
    mail :"shubh@gmail.com",
    days :["Monday", "Sunday"]
}
// console.log(obj.name)
// console.log(obj["name"])
// //console.log(obj.full name)//This will throw error
// console.log(obj["full name"])
// console.log(typeof obj.mysym)//This will return string
// console.log(typeof [mysym])//This will return symbol
// console.log(obj[mysym])

// obj.mail = "Shubham@gmail.com"//it will replace
// Object.freeze(obj)//after this changes will not apply
// obj.mail = "shubh098@gmail.com"


//Defining Function
obj.greeting = function(){
    console.log("Good Morning")
} 
obj.greeting1 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(obj.greeting())
console.log(obj.greeting1())
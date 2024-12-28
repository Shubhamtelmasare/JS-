// function myname(){
//     console.log("S")
//     console.log("h")
//     console.log("u")
//     console.log("b")
//     console.log("h")
// }
//myname //This is referance of function
//myname()//Calling the function

// function add(num1,num2){
//     //console.log(num1+num2); //This will only print the number but will not return anything
//     console.log("The result is ");
//     result = num1+num2
//     return result //This will return the number
// }
// const a=add(2,1)
// console.log(a)

function userlogin(username = "Shubham"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(userlogin("Shubh"))
console.log(userlogin())//This will print default value

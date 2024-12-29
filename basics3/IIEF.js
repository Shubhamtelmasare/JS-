//Immediately Invoked Function
(function(){
    console.log("IIEF")
})(); //This semicolon denote the ending of the function program
//without the semicolon it will throw error
(function(){
    console.log("IIEF2")
})();

(()=>{
    console.log("This is also valid function without name")
})();

((name)=>{
    console.log(`passing name ${name}`);
})("Shubham")
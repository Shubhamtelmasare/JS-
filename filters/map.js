const nums=[1,2,3,4,5,6,7,8,9,10]
//UsingMAPs
// const newnums=nums.map((num)=>{
//     return num+10;
// })// 

//Using forEach loop
// const nu=[]
// nums.forEach((num)=>{
//     num=num+10
//     nu.push(num)
// })
// console.log(nu)

//Chaining
const newnums =nums
              .map((num) => num*10)
              .map((num) => num+1)
              .filter((num) => num>=40)

console.log(newnums)
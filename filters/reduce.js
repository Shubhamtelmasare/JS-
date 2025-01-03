const mynums=[1,2,3]
// const mytotal = mynums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
// },0)

//another way to declear
// const mytotal=mynums.reduce((acc,curval)=>acc+curval)
// console.log(mytotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
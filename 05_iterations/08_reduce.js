const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currvalue) {
//     console.log(`acc: ${acc} and currvalue: ${currvalue}`);
//     return acc + currvalue
// }, 0)


// using arrow
const mytotal = mynums.reduce(( acc ,currvalue ) =>  acc + currvalue, 0)
console.log(mytotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "python course",
        price: 2999
    }
]

const pricetopay = shoppingcart.reduce(( acc, item ) =>  acc + item.price, 0)

console.log(pricetopay);
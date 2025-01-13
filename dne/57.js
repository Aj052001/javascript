// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const products = [
    { id: 1, name: 'Sunscreen', price: 99.99, image: '/image/sunscreen.jpeg' },
    { id: 2, name: 'Detan face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
    { id: 3, name: 'Detan Kit', price: 199.99, image: '/image/sunscreen.jpeg' },
    { id: 4, name: 'Pimple gel', price: 99.99, image: '/image/sunscreen.jpeg' },
    { id: 5, name: 'Pimple face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
    { id: 6, name: 'Blemish gel', price: 199.99, image: '/image/sunscreen.jpeg' },
    { id: 7, name: 'Blemish face wash', price: 99.99, image: '/image/sunscreen.jpeg' },
    { id: 8, name: 'Fairness cream with SPF 20', price: 149.99, image: '/image/sunscreen.jpeg' },
    { id: 9, name: 'Fairness moisturiser with SPF 25', price: 199.99, image: '/image/sunscreen.jpeg' },
    { id: 10, name: 'P++ lotion', price: 99.99, image: '/image/sunscreen.jpeg' },
  ];

const userNames = products.map((product)=>{
    return `${product.id} product name is ${product.name} product price is ${product.price} and product image is ${product.image}`;
});

console.log(userNames);





// const numbers = [3,4,6,1,8];


// const newArray = numbers.map((value,index)=>{
//      return value*2
// }
// )

// console.log(newArray)
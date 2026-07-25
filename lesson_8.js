// tính tổng đơn hàng
const carts = [
    {name:"", price: 100, qty: 2},
    {name:"", price: 200, qty: 1},
    {name:"", price: 300, qty: 3},
    {name:"", price: 400, qty: 1}
]

let total = 0;

carts.forEach(function(item){
    total += item.price * item.qty;
})

console.log(total)

// tim san pham theo id

const products = [
    {id:1, name:"Iphone", price: 100},
    {id:2, name:"Xiaomi", price: 200},
    {id:3, name:"Tablet", price: 300},
    {id:4, name:"Laptop", price: 400}
]

const prodId = 2;
let prod = {};
products.forEach(function(item){
    if(prodId === item.id){
        prod = item;
    }
})

console.log(prod);
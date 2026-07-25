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


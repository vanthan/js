const orders = [
    {status:"pending"},
    {status:"completed"},
    {status:"pending"},
    {status:"cancelled"}
];

// đếm số đơn hàng theo trạng thái

const count = {}
for (const item of orders) {
    count[item.status]= (count[item.status] ?? 0) + 1;
}

console.log(count);
const orders = [
    {
        id:1, total:500
    },
    {
        id:2, total:1200
    },
    {
        id:3, total:300
    },
    {
        id:4, total:400
    },
    {
        id:5, total:1200
    }
]

// tim don hang co gia tri cao nhat
let order = orders[0];
let orderList = [];
let max = 0;
for (const item of orders) {
    if(item.total > order.total ) {
        orderList = [item];
        order = item;
        max = item.total;
    }else if(item.total === max){
        orderList[orderList.length] = item;
    }
}

console.log(orderList);

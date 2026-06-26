// Tìm mặt hàng bán chạy nhất
const orders = [
    "iphone",
    "iphone",
    "samsung",
    "iphone",
    "xiaomi",
    "xiaomi"
]

const count = {}
let max = 0;
let bestSeller = '';
for (const item of orders) {
    console.log(count[item]);
    count[item] = (count[item] ?? 0) + 1;
    if(count[item] > max){

        max = count[item];
        bestSeller = item;

    }
    // console.log(count[item])
}

console.log(count);
console.log(max);
console.log(bestSeller);
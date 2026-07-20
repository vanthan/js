// tìm số xuất hiện nhiều nhất

const number = [1,4,3,3,3,5,6,7,9,3];

const numberS = {};
let max = 0;
for (const item of number) {
    numberS[item] = (numberS[item] ?? 0) + 1;

    if(numberS[item] > max){
        max = item;
    }
}

console.log(numberS);
console.log(max);
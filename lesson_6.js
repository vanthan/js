// đếm số user đang hoạt động
const users = [
    {name: "A", active : true},
    {name: "B", active : false},
    {name: "C", active : true},
    {name: "D", active : true},
    {name: "E", active : false}
]

let uActive = [];
for (const item of users) {
    
    if(item.active == true){
        uActive.push(item);
    }
}

console.log(uActive.length);


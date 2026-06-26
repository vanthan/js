// đếm tổng số học sinh

const classes = [
    {
        name:"A",
        students: ["An", "Bình"]
    },
    {
        name:"B",
        students: ["Cường"]
    }
]

let sum = 0;
for (const item of classes) {
    
    sum += item.students.length
}

console.log(sum);
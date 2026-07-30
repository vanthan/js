// ts la typescript
interface Student {
    id:number,
    name:string,
    age:number,
    gender:string
}

const bob = {
    id:1,
    name:'Bob',
    age:12,
    gender:'male'
}

const { id, name:newName} = bob; // là tạo ra hai biến id và name lấy giá trị từ bob
                         // để đổi tên biến thì dùng name:newName


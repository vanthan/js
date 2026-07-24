// Tham chiếu js: lưu địa chỉ vùng nhớ của object - không lưu trực tiếp giá trị
const user1 = {
    name: "Than"
}

const user2 = user1; // như thế này user2 va user1 đang cùng trỏ tới một vùng nhớ
user2.name = "Hung"; // khi user2.name thay đổi user1 cũng bị thay đổi theo ( user1.name, user2.name cung la Hung)

console.log(user1);
console.log(user2);

const user3 = {...user1} // như này là tạo mới user3 clone từ user1
user3.name = "Tai"; // lúc này user3.name thay đổi độc lập, ko làm thay đổi user1.name ( user1.name = Hung, user3.name = Tai)

console.log(user1);
console.log(user3);

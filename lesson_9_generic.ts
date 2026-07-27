// generic type
function identity(arg : number): number {
  return arg;
}

console.log(identity(123));


function identityG<T>(arg : T): T {
  return arg;
}

console.log(identityG('123'));

interface List<T>{
  length:number;
  [index:number]:T //mỗi phần tử là một giá trị T
}

const numberList: List<number> = [1,2,3]
const wordList: List<string> = ["Hung","Than","Son"];

interface Student {
  id:number;
  name:string
}

const studentL: List<Student> = [{id:1, name:"Than"}];
console.log(studentL);
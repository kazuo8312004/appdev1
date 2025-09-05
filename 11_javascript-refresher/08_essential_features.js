let hobbies = ["gaming", "coding", "reading"];
hobbies.map(hobby => console.log(hobby));

const student = { name: "Percival", age: 21 };
const { name, age } = student;

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);
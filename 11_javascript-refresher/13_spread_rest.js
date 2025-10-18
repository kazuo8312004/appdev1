const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

const user = { name: "Percival", age: 21 };
const updatedUser = { ...user, course: "ReactJS" };

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(moreNumbers);
console.log(updatedUser);
console.log(sum(1, 2, 3, 4));
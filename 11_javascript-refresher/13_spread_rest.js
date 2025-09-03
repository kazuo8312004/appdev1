const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

const user = { name: "Percival", age: 25 };
const newUser = { ...user, course: "BSIS" };

function sumAll(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
const person = {
  name: "Percival",
  age: 25
};

const hobbies = ["gaming", "coding"];

const { name, age } = person;
const [hobby1, hobby2] = hobbies;

function printName({ name }) {
  console.log(name);
}
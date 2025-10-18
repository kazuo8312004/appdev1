const person = {
  name: "Percival",
  age: 21
};

const hobbies = ["reading", "coding"];

const { name, age } = person;
const [firstHobby, secondHobby] = hobbies;

function printName({ name }) {
  console.log(name);
}

console.log(name, age);
console.log(firstHobby, secondHobby);
printName(person);
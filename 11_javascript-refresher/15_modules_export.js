// 15_modules_export.js
const userInfo = {
  name: "Percival",
  age: 21
};

export default function greet() {
  return `Hello, ${userInfo.name}!`;
}

export { userInfo };
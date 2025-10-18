let foods = ["Sushi", "Pizza", "Tacos"];
foods.push("Ramen");
foods.shift();

for (const food of foods) {
  console.log(food);
}

let likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);
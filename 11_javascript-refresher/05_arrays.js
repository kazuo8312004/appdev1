let foods = ["sushi", "ramen", "tacos"];
foods.push("pizza");
foods.shift();

for (const food of foods) {
  console.log(food);
}

let likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);
let aboutMe = {
  name: "Percival",
  age: 21,
  course: "BSIS",
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.hobby = "coding";
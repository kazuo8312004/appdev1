let aboutMe = {
  name: "Percival",
  age: 21,
  course: "BSIS3",
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();

aboutMe.hobby = "coding";
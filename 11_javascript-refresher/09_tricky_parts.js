console.log("5" == 5);   // true
console.log("5" === 5);  // false

let x;
let y = null;
console.log(typeof x, typeof y); // undefined, object

const obj = {
  regularFunc: function() {
    console.log(this);
  },
  arrowFunc: () => {
    console.log(this);
  }
};

obj.regularFunc(); // refers to obj
obj.arrowFunc();   // refers to global/window

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1, 2, 3]

let arr3 = [...arr1];
arr3.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [1, 2, 3, 4]
console.log("5" == 5);   
console.log("5" === 5); 

let x;
let y = null;
console.log(typeof x, typeof y); 

const obj = {
  regularFunc: function() {
    console.log(this);
  },
  arrowFunc: () => {
    console.log(this);
  }
};

obj.regularFunc();
obj.arrowFunc();   

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); 

let arr3 = [...arr1];
arr3.push(4);
console.log(arr1); 
console.log(arr3); 
console.log("5" == 5);   
console.log("5" === 5);  

let x;
let y = null;
console.log(x, typeof x);
console.log(y, typeof y); 

const obj = {
  regular: function() {
    console.log(this);
  },
  arrow: () => {
    console.log(this);
  }
};

obj.regular(); 
obj.arrow();   
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); 

let arr3 = [...arr1];
arr3.push(5);
console.log(arr1); 
console.log(arr3); 
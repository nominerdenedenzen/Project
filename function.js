// const num =7;

// function add(a,b) {
//     const sum = a + b;
//     return sum;
// }
// function subtract(a,b) {
//     return a-b;
// }
// function multiply(a,b) {
//     return a*b;
// }
// const result = multiply((subtract(add(3,4), add(8,9))),subtract(7,9));
// console.log(result);

// function multiply(a,b) {
//     return a*b;
// }
// const result=multiply(8,9);
// console.log(result);

// for (let i=1; i<=10; i++) {
//     console.log(i)
// }
// for (let i=10; i>=-1; i--) {
//     console.log(i)
// }
// for (let i=0; i<=10; i+=2) {
//     console.log(i)
// }
// for(let i=1; i<=100;i++) {
//     if(i % 3 === 0 || i % 7 === 0)
//     console.log(i)
// // }
// let sum = 0;
// for(let i=1; i<=10; i++) {
//     if(i % 2 === 0) {
//         sum= sum+i;
//     }
// }
// console.log(sum)

// 4;
// const arr = [1, 4, 6, 7, 9, 2, 4, 9, 3];
// let index = 0;
// for (let i = 0; i < arr.length; i = i + 1) {
//   if (arr[i] > arr[index]) {
//     index = i;
//   }
// }
// console.log(index);

// 5;
// const arr = [1, -4, 8, 10, -28, 64, 76];

// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }

// console.log(arr);

// console.log(arr);

// const arr = [1, -4,8,10,-28,64,76];
// let max = arr[0];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]>max) {
//         max=arr[i];
//     }
// }
// console.log(max)

// 3.
// const arr = [1, -4,8,10,-28,64,76];
// let min=arr[0];
// for(let i=0; i< arr.length; i++) {
//     if(arr[i]< min) {
//         min=arr[i]
//     }
// }
// console.log(min)
// 2.
// let sum=0
// for(let i=0; i< arr.length; i++) {
//     if(arr[i]>0) {
//         sum+= arr[i];
//     }
// }
// console.log(sum)
// let sum=0;

// for(let i=0; i<7; i++) {
//     sum+=arr[i];
// }
// console.log(sum)

// for (let i=0; i < 7; i++) {
//     console.log(arr[i]);
// }

// 6.
// const arr = [1, 4, 6, 7, 9, 2, 4, 9, 3];
// let count = 0;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     count++;
//   }
// }
// console.log(count);

// 7.
// const arr = [1, 4, 6, 2, 9, 4, 4, 9, 3];
// let pairs = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     console.log([arr[i], arr[j]]);
//   }
// }

// 8.
// const arr = [5, 4, 6, 9, 0, 7, 8, 1, 2];
// const number = 9;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === number) {
//       count++;
//     }
//   }
// }
// console.log(count);

//9
// const arr1 = [1, 4, 6, 2, 9, 4, 4, 3];
// const arr2 = [1, 5, 2, 7, 9, 3, 6, 10, 5];
// let inter = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       inter.push(arr1[i]);
//     }
//   }
// }

// console.log(inter);

// 10.
// const arr = [1, 4, -6, -10, 7, -9, 8];

// let leftIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     let temp = arr[i];
//     arr[i] = arr[leftIndex];
//     arr[leftIndex] = temp;
//     leftIndex++;
//   }
// }
// console.log(arr);

// 11.
// const arr = [3, 4, 6, 7, 8, 9];
// let missingNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1] !== arr[i] + 1) {
//     missingNumber = arr[i] + 1;
//     break;
//   }
// }
// console.log(missingNumber);

// 1.
// const arr = [1, 4, 6, 2, 9, 4, 4, 9, 3];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if ((arr[i] = arr[i])) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [];

// const arr1 = [4, 5, 6, 7, 8];
// const arr2 = [8, 9];
// let merge = [];
// while (arr1[i] !== arr2[i]) {
//   merge.push(arr1[i]);
// }
// console.log(merge);

const arr = [1, 2, 3, 4, 5];

const squares = arr.map((currentElement) => {
  return currentElement * 3;
});

console.log(squares);

const product = {
  name: "T-Shirt",
  description: "Podvolk hyamdarlaa",
  price: 50000,
  images: ["", ""],
  store: {
    address: "BZD",
  },
};
console.log(product.store.address);

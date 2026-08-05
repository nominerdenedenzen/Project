// const arr = [1, 2, 3, 4, 5];

// //Map
// const squares = arr.map((currentElement) => {
//   return currentElement * 3;
// });

// // console.log(squares);

// //Filter (zuvhun array gargaj irdeg)
// const filtered = arr.filter((currentElement, index) => {
//   return currentElement > 3 && index < 5;
// });
// // console.log(filtered);

// //Find (too gargana)
// const found = arr.find((item, index) => {
//   return item > 3 && index < 6;
// });
// // console.log(found);

// //Sort
// const sorted = arr.sort((a, b) => {
//   //   if (a === b) return 0;
//   //   if (a > b) return -1;
//   //   if (b > a) return 1;

//   return b - a; //a-b ascending b-a descending
// });
// // console.log(sorted);

// const arr2 = [...arr] //arr hevleh
//   .sort((a, b) => a - b)
//   .map((item) => item * item)
//   .filter((item) => item > 10);
// // console.log(arr2);

const str = "Hello";
// // for (let i = 0; i < str.length; i++) {
// //   console.log(str[i]);
// // }

// //Includes
// console.log(str.includes("el"));

//Split
// const arr3 = str.split("e", "");
// console.log(arr3);

// //Slice
// const sliced = str.slice(2, 4);
// console.log(sliced);

// //Replace
// const a = str.replaceAll("l", "y");
// console.log(str, a);

// //toLowerCase toUpperCase
// const b = str.toUpperCase;
// console.log(str, b);

// const swap = (arr, i, j) => {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// const bubbleSort = (arr) => {
//   for (let k = 0; k < arr.length; k++) {
//     for (let i = 0; i < arr.length - 1 - k; i++) { //ar taliin toog algasah k
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([10, 3, 76, 2, 34, 89, 22]));

// const isPalindrome = (pal) => {
//   for (let i = 0; i < pal.length / 2; i++) {
//     if (pal[i] !== pal[pal.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const isPalindrome2 = (pal) => {
//   let reversed ="";

//   for (let i=pal.length-1;i>=0;i--) {
//     reversed = reversed + pal[i];
//   }

//   return reversed===pal;
// }

// const isPalindrome3 = (pal) => {
//   return pal === pal.split("").reverse().join("")
// };
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

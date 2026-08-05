// Exercise 1
// const number = 11;
// if(number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Positive");
// }

// Exercise 2
// const number = 9;
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// Exercise 3
// let number1 = 6;
// let number2 = 3;
// if (number1 > number2) {
//     console.log(number1);
// } else {
//     console.log(number2);
// }

// Exercise 4
// let grade = 99;
// if (grade > 90) {
//     console.log("A");
// } else if (grade > 80){
//     console.log("B");
// } else if (grade > 70){
//     console.log("C")
// } else if (grade > 60) {
//     console.log("D");
// } else if (grade < 50) {
//     console.log("F")
// }

// Exercise 5
// let age=12;
// if (age <= 12) {
//     console.log("5")
// } else if (age <=18) {
//     console.log("10")
// } else if (age <= 60) {
//     console.log("20")
// } else if (age > 60) {
//     console.log("15")
// }

// // Exercise 6
// let days=365;
// if (days === 366) {
//     console.log("Leap Year");
// } else if (days <= 365){
//     console.log("Not Leap Year");
// }

//Exercise 7
// let price = 50;
// if (price >= 100) {
//     console.log("20");
// } else if (price >=50) {
//     console.log("10");
// } else {
//     console.log("0");
// }

// Exercise 8
// let time = 11;
// if (time <= 12) {
//     console.log("Good Morning!")
// } else if (time <= 18) {
//     console.log("Good afternoon!")
// } else if (time <= 21) {
//     console.log("Good Evening")
// }

// // Exercise 9
// let weight = 50;
// let height = 168;
// let bmi =weight/(height*height);
// if (bmi <= 18.5) {
//     console.log("Underweight");
// } else if (bmi <= 24.9) {
//     console.log("Normal");
// } else if (bmi > 24.9) {
//     console.log("Overweight");
// }

//Exercise 10
// let number = 10;
// let guess = 19;
// if (number > guess) {
//     console.log("Lower");
// } else {
//     console.log("Higher");
// }  

// Exercise
// let userStatus = "Economy";
// let distance = 100;
// let fee;

// // 1. VIP
// if (userStatus === "VIP") {
//     delivery = 0;
// } else if (distance > 50) {
//     delivery = 10;
// }

// 2
// let cartTotal=155;
// let distance = 15;
// let userStatus = "Regular"
// if (cartTotal >= 150 && distance < 10) {
//     fee= 0;
// } else {
//     delivery=distance*3
// }
// console.log(delivery)

// //4
// let distance = 45;
// if (distance < 10) {
//     fee = 5 + (1*distance);
// } else {
//     fee = 5 + 10 +((distance-10)*2);
// }
// console.log(fee)

// //5
// let couponCode="HALFSHIP";
// if (couponCode = "HALFSHIP") {
//     fee1 = fee/2
// }
// console.log(fee1)

function calculateDeliveryFee(cartTotal, distance, userStatus, couponCode) {
    let deliveryFee=0;

if(userStatus=== "VIP") {
    if(distance > 50) {
        deliveryFee = 5+10+((distance-10)*2);
    } else {
        deliveryFee=0;
    }
} else {
    if (cartTotal > 150 && distance < 10) {
        deliveryFee = 5;

        if (distance <= 10) {
            deliveryFee += distance * 1;
        } else {
            deliveryFee+= 10 * 1 * ((distance -10)*2);
        }
    }
}

if (couponCode === "HALFSHIP" && deliveryFee >0) {
    deliveryFee /= 2;
}
return deliveryFee;
}
const cartTotal = 140;
const distance = 15;
const userStatus="Regular";
const couponCode = "HALFSHIP";

const fee = calculateDeliveryFee(cartTotal, distance,userStatus, couponCode); 
console.log('The delivery fee is ${fee}')



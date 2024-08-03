// //Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers

// const arrayAverage = (arr) => {
//     let total = 0;
//     for( let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };

// let arr = [ 1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));


// //Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not 

// const isEven = (num) => {
//     let ans = "even";
//     if((num % 2) != 0) {
//         console.log("The number you entered is not even")
//     }else {
//         return ans;
//     }
// };

// let num = 68;
// console.log(isEven(num));

// //alternate solution
// let num = 4;

// const isEven =  (num) => num%2 == 0;

// console.log(isEven(num));




//Output of foll code

let length = 4;
function callBack() {
    console.log(this.length);
}

const object = {
    length: 5 ,
    method(callBack) {
        callBack();
    },
};
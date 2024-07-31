// //1
// let arr = [8,9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// //elemets larger than a number num 
// function getElements(arr, num) {
//     for( let i=0; i<arr.length; i++) {
//         if( arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr, num);


// //2
// let str = "abcdabcdefgggh";

// function getUniqChar(str) {
//     let ans = "";

//     for (let i=0; i<str.length; i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUniqChar(str);


// //3
// let country = ["Australia", "Germany", "United States of America"];

// function getCountry(country) {
//     let ansIdx = 0;
//     for(let i = 0; i<country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;

//         if(currLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// let ans = getCountry(country);
// console.log(ans);


// //4
// let str = "Krutika";

// function getVowel(str) {
//     let count = 0;
//     for(let i = 0; i<str.length; i++) {
//         if(str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" ) {
//             count += 1;
//         }
//     }
//     return count;
// }
// let ans = getVowel(str);
// console.log(ans);


//5
let start = 200;
let end = 500;

function genRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

let ans = genRandom(start, end);
console.log(ans);
// //1
// let arr = [1,2,3,4,5,6,2,3];
// let num=2;

// for(let i=0;i<arr.length; i++){
//     if(arr[i] == num) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);



// // //2
// // let number = "287152";
// // console.log(number.length);

// let num = 287152;
// count =0;
// let copy = num;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);


// //3
// let number = 287152;
// let sum = 0;
// let copy = number;

// while(copy > 0) {
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// //4
// let num = 0;
// let fact = 1;

// while (num>0) {
//     fact = fact * num;
//     num--;
// }

// console.log(fact);


//5 
let arr = [1,2,3,4,5,6,2,3];
let largest = 0;

for(let i=0;i<arr.length-1; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);
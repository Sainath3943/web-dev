// const classInfo = {
//     aman : {
//           grade: "A",
//           city: "Delhi"
//     },
//     krutika : {
//           grade: "O",
//           city: "Panvel"
//     },
//     Sainath : {
//           grade: "A+",
//           city: "Panvel"
//     }
// }

// let greet = "hello";
// function changeGreet() {
//     let greet = "Namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log("greet");
//     }
// }

// console.log(greet);
// changeGreet();


// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, //global scope
//     getName: function() {
//         console.log(this);          //global scope
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);          //parents scope - window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout (() => { 
//             console.log(this);     //parents scope
//         },2000);
//     },
//     getInfo2: function() {
//         setTimeout (function() {        // global scope
//             console.log(this);              
//         },2000);
//     }
// };


// const square = (n) => n*n;

// console.log(square(5))

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id)
// }, 10000);  


// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);

// // //
// let arr = [ 1,2,3,4,5,6,23,21,3];
// // let max = -1;
// // for (let i=0; i<arr.length; i++) {
// //     if(max < arr[i]) {
// //         max = arr[i];
// //     }
// // } 
// // console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     }
//     else {
//         return max;
//     }
// });
// console.log(max);


// //
// let numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map((num) => num * num);
// console.log(squareNumbers);


// let sum = squareNumbers.reduce( (acc, el) => (acc + el));

// let avg = sum / numbers.length;
// console.log(avg);


// //
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.map((num) => num + 5));


// //
// let strings=["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((string) => string.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];
// doubleAndReturnArgs([1,2,3], 4, 4);
// doubleAndReturnArgs([2], 10, 4);

//
// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});
// mergeObjects({a:1,b:2},{c:3,d:4});

// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
//   }
  
  // // Example usage
  // const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

  // // Example usage
  // const object1 = { a: 1, b: 2, c: 3 };
  // const object2 = { b: 4, d: 5, e: 6 };
  
  // const mergedObject = mergeObjects(object1, object2);
  
  // console.log(mergedObject);




// //Part 9 DOM
// //Q1
// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

// //Q2
// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm blue h3!";
// document.querySelector('body').append(h3);

// h3.classList.add("blue");

// //Q3
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText= "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector('body').append(div);   



// //Part 10
// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function() {
// //   console.log("button was clicked");
// // };

// function sayHello() {
//   alert("Hello!");
// }

// btn.onclick = sayHello;

// //for all buttons to give alert prompt
// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//   btn.onclick = sayHello;
// }

// //addEventListener
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
// }

// function sayName() {
//   alert("Krutika");
// }

// //this keyword for single query
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// //this keyword for multiple queries to apply same properties
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);


// //Keyboard Events
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function() {
//   console.log("key was pressed");
// });


// //Form events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   alert("form submitted");
// }); 

// //extracting Form Data
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

//   console.log(user.value);
//   console.log(pass.value); 
// });

// //More events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
// });
// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//   console.log("input change");
//   console.log("final value = ", this.value);
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");


// inp.addEventListener("input", function() {
//   console.log(inp.value);
//   p.innerText = inp.value;
// });


// //Event Bubbling -- Event bubbling is a mechanism in JavaScript where an event triggered on a specific element (target element) propagates up the DOM tree, triggering event handlers on parent elements, until it reaches the outermost element

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(event) {
//   console.log("Button was clicked");
// });

// ul.addEventListener("click", function(event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }



// // CallBack Hell -- JS is a single threaded and it performs single task at a time 
// // If we use a setTimeout function and keep the timings of th efunctions same the last function will be seen executing

// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout( ()=> {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//   },delay);
// }

// changeColor("red", 1000,() => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
//   });
// });


////
// function savetoDb(data) {
//   let internetSpeed = Math.floor(Math.random()* 10)+ 1; 
//   if(internetSpeed > 4){
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna College",
//   () => {
//     console.log("your data was saved : ");
//     savetoDb(
//       "Sainath Redekar",
//       () => {
//         console.log("Success 2:your data was saved : ");
//         savetoDb(
//           "Success again",
//           () => {
//             console.log("Success 3: your data was saved : ");
//           }, 
//           () => {
//             console.log("Failure 3: weak connection. Data not sent");
//           }
//         );
//       }, 
//       () => {
//         console.log("Failure 2: Data not sent");
//       }
//     );
//   }, 
//   () => {
//     console.log("weak connection. Data not sent");
//   }
// );


//Promises -- The  promise object represents the eventual completion of an asynchronous operation and its resulting value

function savetoDb(data) {
    return new Promise((resolve, reject) => {
      let internetspeed = Math.floor(Math.random() * 10) + 1;
      if (internetspeed > 4) {
        resolve("success: data was saved");
      }else {
        reject("Failure: weak connection");
      }
    })
}
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


const student = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console.log(this);          //global scope
        return this.name;
    },
    getMarks: () => {
        console.log(this);          //parents scope - window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout (() => { 
            console.log(this);     //parents scope
        },2000);
    },
    getInfo2: function() {
        setTimeout (function() {        // global scope
            console.log(this);              
        },2000);
    }
};


const square = (n) => n*n;

console.log(square(5) )

// //1
// let h1 = document.querySelector("h1");
// let inp =document.querySelector("input");
// let scrollableDiv = document.getElementById("scrollableDiv");
// let btn = document.querySelector("button");

// h1.addEventListener("mouseout", function(event) {
//     console.log("you moved");
// });

// inp.addEventListener("keypress", function(event) {
//     console.log("you pressed", this.value);
// });

// scrollableDiv.addEventListener("scroll", function(event) {
//     console.log(`Scroll position: ${event.target.scrollTop}`);
// });

// btn.addEventListener("load", function(event) {
//     console.log("Loaded the button");
// });


// //2
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     btn.style.backgroundColor = 'green';
// });

//3
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function(event) {
    let updatedValue = event.target.value.replace(/[^a-zA-Z\s]/g, '');

    event.target.value = updatedValue;

    h2.innerText = updatedValue;
});

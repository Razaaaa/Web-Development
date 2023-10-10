// var imagechange = document.querySelectorAll(".pictures-container img")
// var dots = document.querySelectorAll(".buttonslider button");
// window.addEventListener('load', function () {
//     imagechange = document.querySelectorAll(".pictures-container img")
//     dots = document.querySelectorAll(".buttonslider button");
// })
// let i = 0;
// let j = 6;

// function next(){
//     document.getElementById("img" + (i+1)).classList.remove("active");
//     i = ( j + i + 1) % j;
//     document.getElementById("img" + (i+1)).classList.add("active");
//     indicator( i+ 1 );
// }

// function prev(){
//     document.getElementById("img" + (i+1)).classList.remove("active");
//     i = (j + i - 1) % j;
//     document.getElementById("img" + (i+1)).classList.add("active");
//     indicator(i+1);
// }

// function indicator(num){
//     dots.forEach(function(dot){
//         dot.style.backgroundColor = "transparent";
//     });
//     document.querySelector(".buttonslider button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
// }

// function dot(index){
//     imagechange.forEach(function(image){
//         image.classList.remove("active");
//     });
//     document.getElementById("img" + index).classList.add("active");
//     i = index - 1;
//     indicator(index);
// }

var imagechange = document.querySelectorAll(".pictures-container img");
var dots = document.querySelectorAll(".buttonslider button");
var timerInterval; // Declare a variable to hold the timer interval

window.addEventListener('load', function () {
    imagechange = document.querySelectorAll(".pictures-container img");
    dots = document.querySelectorAll(".buttonslider button");
    startAutoChange(); // Start the automatic image change timer on page load
});

let i = 0;
let j = 6;

function next(){
    document.getElementById("img" + (i+1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("img" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("img" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("img" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".buttonslider button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
}

function dot(index){
    imagechange.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("img" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

function startAutoChange() {
    timerInterval = setInterval(function() {
        next(); // Call the next function to change the image
    }, 2000); // Change image every 2 seconds (2000 milliseconds)
}

function stopAutoChange() {
    clearInterval(timerInterval); // Stop the automatic image change timer
}



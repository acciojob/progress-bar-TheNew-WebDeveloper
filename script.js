//your JS code here. If required.
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var lines =  document.querySelectorAll(".lines");
var circles = document.getElementsByClassName("circle");

let pointer = 0;
let maxSteps = 4;

function updateButtonStates() {
    if(pointer === 0) {
        prev.setAttribute("disabled", true);
    }
    else {
        prev.removeAttribute("disabled");
    }

    if(pointer === maxSteps) {
        next.setAttribute("disabled", true);
    }
    else {
        next.removeAttribute("disabled");
    }
}

function prevFun() {
    if(pointer > 0) { 
        lines[pointer-1].style.backgroundColor = "lightgray";
        circles[pointer].classList.remove("active");
        pointer--;
    }
    updateButtonStates();
}

prev.addEventListener("click", prevFun);

function nextFun() {
    if(pointer < maxSteps) {
        lines[pointer].style.backgroundColor = "rgb(40, 159, 206)";
        pointer++;
        circles[pointer].classList.add("active");
    }
    updateButtonStates();
}

next.addEventListener("click", nextFun);
document.addEventListener("DOMContentLoaded", updateButtonStates);
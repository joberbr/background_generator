var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById('random');


function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function setRandomColor() {
    var randomColor1 = randomColor();
    var randomColor2 = randomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;

    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColor);

window.addEventListener("load", setGradient);
window.addEventListener("load", setGradient);
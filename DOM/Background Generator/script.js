var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var css = document.querySelector("h3");
var button = document.querySelector("button");

UpdateBackground();

function UpdateBackground(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background+";"
}

color1.addEventListener("input", UpdateBackground);

color2.addEventListener("input", UpdateBackground);

button.addEventListener("click", function(){

	 color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	 color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);

	 UpdateBackground();
});
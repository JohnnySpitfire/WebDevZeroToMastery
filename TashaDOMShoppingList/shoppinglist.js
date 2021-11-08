var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = ul.children
var done = document.getElementById("done");

console.log(li)

function lineThroughList(){
	this.classList.toggle("done");
}

// ul.addEventListener("click", function () {
//     ul.classList.toggle("done");
// })

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

// function taskDone(i) {
//     if (li[i].className !== "done") {
//         li[i].classList.add("done");
//     } else {
//         li[i].classList.toggle("done");
//     }
// }



for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', lineThough)
    console.log(li[i])
}



button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);





/*1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/
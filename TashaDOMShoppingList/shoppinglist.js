var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = ul.children
var done = document.getElementById("done");

//"this" refers to whatever the function is being accessed from - i.e a unique item in the list
//so if it is being accessed from the 3rd item in the list (from the event listener) "this" references the 3rd item in the list.
//JavaScript is pretty funky like that

function lineThroughList(){
	this.classList.toggle("done");
}

// this does not do anything as there is no text directly in the <ul> tags

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

// you could now add a function that updates the li array so that you are able to linethrough added items to the list

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);


//  /\_/\
// ( o.o )
//  > ^ <


/*1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/
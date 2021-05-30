var firstNumber = prompt("what is the first number");
var secondNumber = prompt("what is the second number");

var userResponse = prompt("enter ADD to add, SUBTRACT to subtract, MULTIPLY to multiply, and DIVIDE to divide");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

switch (userResponse) {
    case "ADD":

        alert(firstNumber + secondNumber);
        break;

    case "SUBTRACT":

        alert(firstNumber - secondNumber);

    case "MULTIPLY":

        alert(firstNumber * secondNumber);
    
    case "DIVIDE":

       alert(firstNumber % secondNumber);
    default:
        break;
}

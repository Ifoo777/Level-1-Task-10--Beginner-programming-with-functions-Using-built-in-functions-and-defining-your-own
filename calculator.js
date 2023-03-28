let userInput1 = prompt("Enter first number"); //request user to input first number
let value1 = parseInt(userInput1); //convert string to integer

let userInput2 = prompt("Enter second number"); //request user to input second number
let value2 = parseInt(userInput2); //convert string to integer

let operationValue = prompt(
  "what operation they would like to perform on those numbers \n + \n  - \n  * \n / "
); // reqwuest user what type of calculation they would like to perform

//declaring condional statements for the various operations requested by user with various functions passed in
if (operationValue == "+") {
  addTwoNumbers(value1, value2);
} else if (operationValue == "-") {
  subtractTwoNumbers(value1, value2);
} else if (operationValue == "*") {
  multiplyTwoNumbers(value1, value2);
} else if (operationValue == "/") {
  divideTwoNumbers(value1, value2);
} else {
  console.log("User has entered a invalid operation");
}

// various function declarations for addition , subtraction , multiplication and division

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

function subtractTwoNumbers(num1, num2) {
  console.log(num1 - num2);
}

function multiplyTwoNumbers(num1, num2) {
  console.log(num1 * num2);
}

function divideTwoNumbers(num1, num2) {
  console.log(num1 / num2);
}

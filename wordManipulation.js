let user = prompt("Enter a word"); //request user to enter a word
let word = user.split(""); // split string method returns an array of string characters individually
let reverseWord = user.split("").reverse(""); //split string method returns an array of string characters individually and add the reverse function ot the string
let wordToUpperCase = user.split(""); //split string method returns an array of string characters individually
let arrayOfAscii = []; //declare an array
let nth = 2; //the nth character you want to replace
let replaceWordWith = "!"; //the character you want to replace the nth value with

for (let i = 1; i < user.length - 1; i += 2) {
  // for loop to iterate through the length of the array set counter variable to 2 so that for every second word is replaced with the syntax given at that specific counter variable
  word[i] = replaceWordWith;
}
console.log(word.join("")); // joins nth character to the the string
console.log(reverseWord.join("")); // reverses word input by user

for (let i = 5; i < user.length - 1; i += 6) {
  //for loop to iterate through the array and replace index at 5 to uppercase so that every sixth letter takes effect
  wordToUpperCase[i] = wordToUpperCase[i].toUpperCase();
}
console.log(wordToUpperCase.join(""));

for (let i = 0; i < user.length; i++) {
  //for loop to iterate through the array and at index i return the Ascii charCodeAt for each letter
  arrayOfAscii[i] = user.charCodeAt(i);
}
console.log(arrayOfAscii);

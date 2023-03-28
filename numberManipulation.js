let myArrayOfNumbers =[];
let sum = 0;
let diviser = 0;


for (let i = 0; i < 10 ; i++){ //request the user to enter 10 numbers (for loop)

    let user = prompt("Enter 10 random numbers");

    let num = parseInt(user); // convert string into integer

    myArrayOfNumbers.push(num); //push function to add new numbers to the array

}
console.log(myArrayOfNumbers);


for (let i = 0; i < myArrayOfNumbers.length; i++){ //iterate through length of the array

    sum = sum + myArrayOfNumbers[i];
    diviser++
}

console.log( (" The total sum of the numbers is ") + sum); //sum of the array
console.log( " The index of the maximum number is " + myArrayOfNumbers.indexOf(Math.max(...myArrayOfNumbers))); //find the index of the maximum in the array
console.log( " The index of the minimum number is " + myArrayOfNumbers.indexOf(Math.min(...myArrayOfNumbers))); ////find the index of the minimum in the array

let average = sum / diviser; //average calculation
console.log( "The average number is " + average );

let sortedArray = myArrayOfNumbers.sort(); //sort the array 

 
let median = (sortedArray[4] + sortedArray[5]) / 2; //median calculation
console.log((" The median is " + median));






    


    






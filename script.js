////////////////////// Leap Year //////////////////

//// part----1
// function checkLeapYear(year) {
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(`${year} is a leap year.`)
//     }else{
//         console.log(`${year} is not a leap year.`)
//     }
// }
// checkLeapYear(2003);
// checkLeapYear(2000);

// part----2

// function leapYear(year) {


//     switch(true) {
//         case ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)):
        
//             console.log(`${year} is a leap year`);
//             break;
    
//         default:
//             console.log(`${year} is not a leap year`);
//     }
// }
// leapYear(2007);
// leapYear(2024);


////////// How to print all even numbers from 0 to 10////////////


// function printEvenNumbers() {
//     for(let i =0; i<=10; i+=2) {
//         console.log(i);
//     }
// }
// printEvenNumbers();

// Part---2
// let even =[];
// for(let i=0; i<=10;i++) {
//     if(i % 2 == 0) {
//         even.push(i);
//     }
// }
// console.log(`Even number is in array are : ${even}`);


// Part-----3

////////// How to print all even numbers from 0 to 10////////////

// function printEvenNumbers() {      // create a function

//     for(let i = 0; i<=10; i++) {    // create a for loop and initialize i=0 in it and continue upto
//                                    // less than 10 and equal to 10 and increment as i+1.
//         if(i %2 == 0){             // If values of i are divisible by 2 and remainder is 0,
//             console.log(i);        // then only those values print on by one.
//         }
//     }
// }
// printEvenNumbers();                // call the function

// Part------4

// let i = 0;
// while(i <= 10) {
//     if(i %2 == 0) {
//         console.log(i)
//     }
//     i++
// }


////////// How to print all odd numbers from 0 to 10 ////////////

// function printOddNumbers() {
//     for(let i =0; i<=10; i++) {
//         if(i %2 !=0){
//             console.log(i);
//         }
//     }
// }
// printOddNumbers();

// Part-----2

    // let i = 0;
    // while(i<=10) {
    //     if(i %2 != 0){
    //         console.log(i)
    //     }
    //     i++;
    // }


// Part---3

////////// How to print all odd numbers from 0 to 10 ////////////

// let oddNumbers = [];                // Take a variable as type of blank array

// for(let i = 0; i <= 10; i++) {     // Create a for loop and initialize i=0 in it and continue upto
//                                   // less than 10 and equal to 10 and increment as i+1.
//     if(i %2 != 0) {              // Which values of i are divisible by 2 but remainder is not 0,
//         oddNumbers.push(i);     // those values are adding to the blank array using push() method.
//     }
// }
// console.log(oddNumbers);        // Finally print the all values in the array.



//////////////// Print a table containing multiplication table ////////////////

// let number = 5;                                  // Take a variable and give it value 5.

// for(let i = 1; i <= 10; i++) {                   // Create a for loop and initialize i=1 in it and continue upto
//                                                  // less than 10 and eual to 10 and increment as i+1.
//     let result = number * i;                     // Take a second variable and in that multiply the every values 
//                                                  // of i with the first variable.
//     console.log(`${number} * ${i} = ${result}`); // Finally print that the first varible multiply by every values
//                                                  // of i is equal to the second variable result.
// }

// Part-----2

// let i = 1;
// let number = 5;
// while (i <= 10) {
//   console.log(`${number} * ${i} = ${number * i}`);
//   i++;
// }


//////////////// Create a length converter function ///////////////

// function lengthConverter(feet) {
//     // let feet = 2;
//     metersResult = feet / 3.2808
//     inchesResult = feet * 12
//     cmResult = feet / 0.032808
//     yardsResult = feet * 0.33333
//     kilometersResult = feet / 3280.8
//     milesResult = feet * 0.00018939

//     console.log(`Meters from feet is : ${metersResult}`);
//     console.log(`Inches from feet is : ${inchesResult}`);
//     console.log(`Centimeters from feet is : ${cmResult}`);
//     console.log(`Yards from feet is : ${yardsResult}`);
//     console.log(`Kilometers from feet is : ${kilometersResult}`);
//     console.log(`Miles from feet is : ${milesResult}`);
// }
// lengthConverter(5);

// Part----------2

// function lengthConverter(meter) {
//     feetResult = meter * 3.2808
//     inchesResult = meter * 39.370
//     cmResult = meter / 0.01
//     yardsResult = meter * 1.0936
//     kilometersResult = meter / 1000
//     milesResult = meter * 0.00062137

//     console.log(`Feet from meter is : ${feetResult}`);
//     console.log(`Inches from meter is : ${inchesResult}`);
//     console.log(`Centimeters from meter is : ${cmResult}`);
//     console.log(`Yards from meter is : ${yardsResult}`);
//     console.log(`Kilometers from meter is : ${kilometersResult}`);
//     console.log(`Miles from meter is : ${milesResult}`);
// }
// lengthConverter(3);

/////////////// Calculate the sum of numbers within an array ///////////////

// function sumArray(array) {                       // Create a function and take a parameter as array in it.

//     let sum = 0;                                // Take a variable and give it value 0.

//     for(let i = 0; i < array.length; i++) {    // Create a for loop and initialize i=0 in it and continue upto
//                                               // less than array length and increment as i+1.
//         sum += array[i];                     // In every iteration we add every single value of array with recent
//                                             // value of sum and store it in sum variable.
//     }
//     console.log(`Sum is : ${sum}`);        // Print the final result of sum.
//     // expected: Sum is : 8
// }
// sumArray([2, -3, 4, 5]);                 // Call the function and in that pass an array of some numbers as argument.

// Part------2

// function sumArray(array) {
//     let sum = 0;
//     array.forEach(num=>{
//         sum += num
//     });
//     console.log(sum);
//     return sum;
// }
// sumArray([1, 2, -3, 4]);

// Part-----3

// function sumArray(array) {
//     let sum = 0;
//     for(let item of array) {
//         sum += item
//     }
//     console.log(sum);
//     return sum;
// }
// sumArray([1, 2, 3, -4]);

// Part-------4

// let array = [-1, 2, 3, 4];
// let i = 0;
// let sum = 0;
// while(i < array.length) {
//     sum += array[i]
//     i++;
// }
// console.log(sum);

// Part------5

// let myArray = [1, 2, 3, 4, 5];
// let sum = myArray.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// },0);
// console.log(sum);


/////////////// Create a function that reverses an array ////////////

// function reverseArray(array) {
//     array.reverse()
//     console.log(array)
// }
// reverseArray([1, 2, 3, 4, 5]);


// Part------2

/////////////// Create a function that reverses an array ////////////

// function reverseArray(array) {                   // Create a function and take a parameter as array in it.

//     let reversed_array = [];                      // Take a variable as type of blank array.

//     for(let i = array.length-1; i >= 0; i--) {   // Create a for loop and initialize i = array.length - 1 and
//                                                 // continue upto greater than 0 and eual to 0 and decrement as i-1.
//         reversed_array.push(array[i]);           // The every value of i comes out from every iteration is adding
//                                                 // to the blank reversed_array using push() method.
//     }
//     console.log(reversed_array);                // Print the final array.
// }
// reverseArray([1, 2, 3, 4, 5]);           // Call the function and in that pass an array of some numbers as argument.

// Part------3

// var x = [{score:1},{"score":2},{calling: function() { console.log('hello') } }]
// let y = x.reverse();
// console.log(y);


//////////////// Sort an array from lowest to highest ///////////////

// let arr =["Suman", "Monomit", "Swarnabha", "Rumpa"]
// let numArr = [22, 11, 89, 55, 63]
// arr.sort();
// numArr.sort()
// console.log(arr)
// console.log(numArr)

// Part---------2

//////////////// Sort an array from lowest to highest ///////////////

// function sortingArray(array) {                // Create a function and take a parameter as array in it.

//     let sorted_array = array.sort((a, b)=> { // In a variable that array parameter using sort() method and pass two
//                                             // new parameter a & b in that method by using arrow function.
//         return a-b;                        // In that arrow function return a-b.
//     });
//     console.log(sorted_array);            // Print the final sorted array as lowest to highest.
// }
// sortingArray([40, 25, 1, -5, 100, 10]);  // Call the function and in that pass an array of some numbers as argument.

// Part-------3

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort(function(a,b){return b-a});
// console.log(numbers);

// let arr = [40, 100, 1, -5, 25, 10]
// let descendingArr = arr.sort((a,b)=> b-a)
// console.log(descendingArr);

// let newArr = [40, 100, 1, -5, 25, 10]
// let ascendingArr = newArr.sort((a,b)=> a-b)
// console.log(ascendingArr);

// Part-------4

// let arr = [40, 100, 1, -5, 25, -10]
// let lowestNum = arr.sort((a,b)=> a-b)
// console.log(lowestNum[0])

// let newArr = [40, 100, 1, -5, 25, 10]
// let highestNum = newArr.sort((a,b)=> b-a)
// console.log(highestNum[0]);

// let newArr2 = [40, 100, 1, -5, 25, 10]
// let highestNum2 = newArr2.sort((a,b)=> a-b)
// console.log(highestNum2[newArr2.length-1])




//////////////// Create a function that filters out negative numbers ///////////

// function filterNegative(arr){
// let negativeNumbers = arr.filter((n)=>{
//    return n < 0;
// })
// console.log(negativeNumbers);
// let sum = negativeNumbers.reduce((x,y)=> {
//     return x + y
// })
// console.log(sum);
// }
// filterNegative([1, -2, 3, -4, 5, -6])

// Part--------2

//////////////// Create a function that filters out negative numbers ///////////

// function filterNegative(array){                // Create a function and take a parameter as array in it.

//     let result = [];                           // Take a variable as type of blank array.

//     for(let i = 0; i < array.length; i++) {  // Create a for loop and initialize i=0 in it and continue upto
//                                              // less than array length and increment as i+1.
//         if(array[i] < 0) {                   // If every value of i comes out from every iteration is less than 0,
//             result.push(array[i]);           // Then that particular value is adding to the blank result array
//         }                                    // using push() method.
//     }
//     console.log(result);                 // Print the final result array.
// }
// filterNegative([1, -2, 3, -4, 5, -6]);  // Call the function and in that pass an array of some numbers as argument.

// Part---------3     

// function filterNegative(array) {
//     let result =[];
//     let i =0
//     while(i<array.length) {
//         if(array[i] < 0) {
//             result.push(array[i])
//         }
//         i++
//     }
//     console.log(result);
// }
// filterNegative([7, -8, 55, -87, 28, 74, -21, 54, -4])

// Part-------4

// function filterNegative(array) {
//     let result =[];
//     array.forEach(element=>{
//         if(element < 0){
//             result.push(element)
//         }
//     })
//     console.log(result);
// }
// filterNegative([7, -8, 55, -87, 28, 74, -21, 54, -4])

// Part-------5

// function filterNegative(array) {
//     let result = [];
//     array.map(element=>{
//         if(element < 0) {
//             result.push(element)
//         }
//     })
//     console.log(result);
// }
// filterNegative([7, -8, 55, -87, 28, 74, -21, 54, -4])



//////////////////////// Remove the spaces found in a string ////////////////

// function removeSpaces(text) {

//     let removedSpacesText = text.split(' ').join('');
//     console.log(removedSpacesText);
// }
// removeSpaces(" a b    c    d    e   f g  ");

// Part----------2

// function removeSpaces(text) {
//     let removedSpacesText = text.replaceAll(' ', '');
//     console.log(removedSpacesText);
// }
// removeSpaces(" a b    c    d    e   f g  ");

// Part-------------3

// function removeSpaces(text) {
//     let removedSpacesText = text.split("").filter(char=> char != ' ').join('')
//     console.log(removedSpacesText);
// }
// removeSpaces("    Myself   Sum  an Nas ka   r")

// Part--------4

/////////////////// Remove the spaces found in a string ////////////////

// function removeSpaces(text) {                // Create a function and take a parameter as string in it.

//     let result = "";                        // Take a variable as type of blank string.

//     for(let i = 0; i < text.length; i++) {  // Create a for loop and initialize i=0 in it and continue upto
//                                             // less than text length and increment as i+1.
//         if(text[i] != " ") {                // If every value of i comes out from every iteration is not equal to
//                                             // a blank string value,
//             result += text[i];              // Then the only condition satisfied values are adding with the recent
//         }                                   // value of result and store it in result variable.
//     }
//     console.log(result);                    // Print the final result.
// }
// removeSpaces("If you think you can, you can!"); // Call the function and in that pass a string as argument.



/////////////////// Return a Boolean if a number is divisible by 10 ////////

// function returnBoolean(num) {         // Create a function and take a parameter as number in it.

//     if(num % 10 == 0) {              // If the number is divisible by 10 and remainder is 0,
//         return true;                 // then return true.
//     }
//     else{                           // else the upper condition is not satisfied,
//         return false;               // then return false.
//     }
// }
// console.log(returnBoolean(20));     // Call the function and in that pass a number as argument and also print the 
// console.log(returnBoolean(25));    // return value which we got by the condition.
// Part-----------2

// function returnBoolean(num) {
//     let boolean = (num)=>{
//         return num % 10 === 0 ? true : false
//     }
//     console.log(boolean(num));
// }
// returnBoolean(10)



////////////////// Return the number of vowels in a string ///////////////

function getCount(string) {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let char of string.toLowerCase()) {
        
        if(vowels.includes(char)) {
            vowelsCount++;
        }
    }
    console.log(vowelsCount);
}
getCount("hi I am Suman Naskar");

// Part-----------2

// function getVowels(string) {
//     let vowels ='aeiou'
//     let str = string.toLowerCase();
//     let vowelsCount = 0;
//     for(let i = 0; i< str.length; i++) {
//         if(vowels.indexOf(str[i]) != -1) {
//             vowelsCount++;
//         }
//     }
//     console.log(vowelsCount);
// }
// getVowels("hi I am Suman Naskar");



////////////////// Palindrome //////////////////

// function checkPalindrome(string) {
//     let str = string.toLowerCase()
//     const len =str.length
//     for(let i =0; i<len/2; i++) {
//         if(str[i] !== str[len-1-i]) {
//             return 'It is not a palindrome'
//         }
//     }
//     return 'It is a palindrome'
// }    
// console.log(checkPalindrome("1213"))







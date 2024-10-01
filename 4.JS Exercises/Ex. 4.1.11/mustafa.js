/**
* Objects and Arrays
• Create an array with the names of five cities. Access and log the third city in the array.
• Create an array of numbers [5, 10, 15, 20]. Add a number at the end, remove the first number, and log
the final array.
• Create an object representing a book with properties title, author, and year. Log the book’s title.
 */

//Create an array with the names of five cities. Access and log the third city in the array.

let newCities=["Bern","Zurich","Winterthur","Brugg","Kollbrunn"];

console.log(newCities[2]);

//Create an array of numbers [5, 10, 15, 20]. Add a number at the end, remove the first number, and log the final array.

let numbers=[5, 10, 15, 20];

numbers.push(33);//Add a number at the end

console.log(numbers);//[5, 10, 15, 20, 33]

numbers.shift();//remove the first number

console.log(numbers);//[10, 15, 20, 33]

//Create an object representing a book with properties title, author, and year. Log the book’s title.

let obj={
    title:"aviation",
    autor:"Charles",
    year:2002
};

console.log(obj.title);













/*
Age Calculator
Want to find out how old you’ll be? Calculate it!
• Use prompt() and alert().
• Ask user for birth year.
• Ask user for a future year.
• Calculate the 2 possible ages for the given year.
• Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
2026.
*/

let yearofBirthh=prompt("Please enter birth year");
let yearofBirth=Number(yearofBirthh);

console.log(yearofBirth);

let yearofFuturee=prompt("Please enter future year");
let yearofFuture=Number(yearofFuturee);

console.log(yearofFuture);

let currentAge=yearofFuture-yearofBirth;

console.log("if you were born in "+(yearofBirth)+" ,then in "+(yearofFuture)+" you’ll be either "+(yearofFuture-yearofBirth)+" or "+ (yearofFuture-yearofBirth+1)+" ,depending on what month it is in "+yearofFuture);
















/**
 * Decimal/Binary conversion
a) Write a program that asks the user for a number and then prints the binary representation of the number.
(If you don’t know what a binary representation is, look it up. Computers use binary to represent
numbers.)
Note: e.g. 25 in binary is 11001
b) Write another program that does the inverse operation - converting binary to decimal.
 */

let num=Number(prompt("please enter the number"));



for(i=num;num>=1;num/2){

    num=num%2;

    console.log(num);

    
}


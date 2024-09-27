/*

Play with for loop
Construct for loops that accomplish the following tasks:
• Print the numbers 0 - 20, one number per line.
• Print only the ODD values from 3 - 29, one number per line.
• Print the EVEN numbers 12 down to -14 in descending order, one number per line.
• Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

*/

//Print the numbers 0 - 20, one number per line.

for(let i=0;i<21;i++){

    console.log(i);

}

console.log("***********************************************************************************");

//Print only the ODD values from 3 - 29, one number per line.

for(let i=3;i<30;i++){

    if(i%2===1){
        console.log(i);
    }
}

console.log("***********************************************************************************");

//Print the EVEN numbers 12 down to -14 in descending order, one number per line.

for(let i=12;i>-15;i--){

    if(i%2===0){
        console.log(i);
    }

}

console.log("***********************************************************************************");

//Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.


for(let i=50;i>19;i--){

    if(i%3===0){
        console.log(i);
    }

}






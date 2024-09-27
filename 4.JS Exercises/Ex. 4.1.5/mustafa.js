/*
Even or Odd(Cift-Tek)
Write a program that asks for the user to input a number:
• If the number is even, print "The number is even."
• If the number is odd, print "The number is odd."
• If it is not a number, print "This is not a number."
*/

let inputNum=prompt("Please just input a number");

inputNum=Number(inputNum);

if(inputNum%2===0){

    console.log("The number is even.");
    
}

else if(inputNum%2===1){
    
    console.log("The number is odd.");

}

else{

    console.log("This is not a number.");

}







/**
 * Password validator
a) Write a program that asks the user for a password and checks if it is valid. The password must
• at least be 8 characters long
• include 1 special symbol
• include 1 number
• not include a space or either
b) Write a program that generates a password according to the requirements above. Use your validator
written in a).
 */


function validatePassword(password){

    switch(true){

        case password.length<8:
       
        return "password must include at least be 8 characters long";
       
        case !specialSymbols.includes(["@", "#", "$", "%"]):
       
        return "password must include 1 special symbol";
       
        case !pass.includes([0-9]):
       
        return "password must include 1 number";
       
        case pass.includes(" "):
       
        return "Password has not  a space or either";

        default:

        return "Password is true";
       
    
       }


    
}


const password = prompt('enter the pass please:');



if (validatePassword(validatePassword)) {

    console.log("valid");
} 

else {
    console.log("invalid");
}










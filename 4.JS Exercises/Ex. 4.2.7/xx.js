
function validatePassword(pass) {

    //1

    let c1 = pass.length >= 8;


    let specialSymbols = ["@", "#", "$", "%"];

    //2

    let c2 = false;

    for (let i = 0; i < pass.length; i++) {
        
        if (specialSymbols.includes(pass[i])) {
            c2 = true;
            break;
        }
    }

   
    //3

    let c3 = false;

    for (j = 0; j < 10; j++) {
        if (pass.includes(j.toString())) {
            c3 = true;
            break;
        }
    }


    // 

    let c4 = !pass.includes(" ");

   
    return c1 && c2 && c3 && c4;
}


const pass = prompt("enter password");




if (validatePassword(pass)) {

    console.log("valid");
} 

else {
    console.log("invalid");
}









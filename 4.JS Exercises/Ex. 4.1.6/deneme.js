function add(number1,number2){

    let sum=number1+number2;

    return sum;

}

console.log(add(1,4));

function isGood(carBrand){

    if(carBrand==="Volvo"){
        return true;
    }

    return false;
}

isGood("Volvo");

//Square brackets
//[] data types must be same

let cars=["Audi","Toyota","VW","Mercedes"];

console.log(cars[1]);

console.log(cars.length);

for(let inte=0;inte<cars.length;inte++){

    console.log(cars[inte]);

}

console.log("************************************");

for(let car in cars){

    console.log(cars[car]);

}

let succeeded=false;

while(!succeeded){
    //try again
}

do{

}while(!succeeded);




/*
Write a function that takes an array of numbers and returns the sum of all even numbers.
*/

// let arr=[1,2,3,4,5,6,7,8,88,99,10,11,12,14];



// function aa(){

//     let sum=0;
   

//     for(let i=0;i<arr.length;i++){

//         if(arr[i]%2===0){


//             sum=sum+arr[i];

//         }

//     }

//     console.log(sum);

   
// }

// aa();

let arr=[1,2,3,4,5,6];

let add=0;

for(item of arr){

    if(item%2===0){

    add+=item;

    }

}

console.log('add '+add);





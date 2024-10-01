/*

for(let x=1;x<=10;x++){

    for(let y=1;y<=10;y++){

        result[x-1][y-1]=x*y;

        

    }




}


console.table(result);

*/

let a=new Array(2);

a[0]=2;
a[1]=4;
a[2]=6;
a[3]=8;

console.log(a);

let timeSpent = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 1],
    ['Watch TV', 2],
    ['Sleep', 7]
];

console.log(timeSpent[0][1]);

for(let ball of timeSpent){

console.log(ball);

}

for(let aff of "Mustafa"){

    console.log(aff);

}


let newOne = [
    ['a', 9],
    ['b', 2],
    ['c', 1],
    ['d', 2],
    ['e', 7]
];


newOne.forEach(function(value,index){

    console.log(value,index);
}

);


console.log("***************************************************");

let secondOne = [
    ['x', 9],
    ['y', 2],
    ['z', 1],
    ['t', 2],
    ['u', 7]
];

secondOne.forEach((value,index)=>{

    console.log(value,index);

});

// alert("new challange");

/**
 * push(): Adds one or more elements to the end of an array.
 * pop(): Removes the last element from an array and returns it.
 * shift(): Removes the first element from an array and returns it.
 * unshift(): Adds one or more elements to the front of an array.
 * splice(): Adds/removes elements from an array.
 * forEach(): Executes a provided function once for each array element.
 * map(): Creates a new array by applying a function to every element.
 * filter(): Creates a new array with elements that pass the test in the provided function.
 * find(): Returns the first element that satisfies the provided testing function.
 * findIndex(): Returns the index of the first element that satisfies the testing function.
 * includes(): Checks if an array contains a certain element.
 * indexOf(): Returns the first index at which a given element can be found.
 * some(): Tests whether at least one element in the array passes the test.
 * every(): Tests whether all elements in the array pass the test.
 * reduce(): Applies a function against an accumulator and each element to reduce the array to a single value.
 */


const maria={

    named: "Maria",
    age:25,
    isMarried:true
};
 
console.log(maria);

class cat{

    constructor(namedd,age,job){
        this.namedd=namedd;
        this.age=age;
        this.job=job;

    }

}


    let ufuk=new cat("Ali","43","Pilot");

    
    console.log(Object.keys(ufuk));

  pi=3,82;

  console.log(Math.floor(pi));
  console.log(Math.round(pi));
  console.log(Math.ceil(pi));


  let currentDate=new Date();


  let h=currentDate.getHours();

  console.log(h);

  //4 ok , 100 not ok or 400 ok

  const vb="first name";

  const obj2={
    [vb]:"Susanne",
    [18]:38,
    experience:13
  }

  console.log(obj2);

  console.log(obj2[vb]);

  


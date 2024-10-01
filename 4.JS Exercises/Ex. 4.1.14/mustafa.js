/**
 * Objects
• Create an object person with properties firstName, lastName, and a method fullName that returns the
full name.
• Create an object student with properties name, age, and an array of objects representing courses (with
courseName and grade). Write a function to log the student’s name and their course grades.
 */

//Create an object person with properties firstName, lastName, and a method fullName that returns the full name.
let obj={

    firstName:"Mustafa",
    lastName:"Zengin",
    fullName:function(){

        return this.firstName+" "+this.lastName
    }

};

console.log(obj.firstName);

console.log(Object.keys(obj));

console.log(Object.values(obj));

// Create an object student with properties name, age, and an array of objects representing courses (with courseName and grade). Write a function to log the student’s name and their course grades.

let obj1={
    name:"Ali",
    age:25,
    arr:[["Math",55],["History",70],["Chemistry",80]],
    deg:function(){

        return this.name+" "+this.name.
    }
   
    }









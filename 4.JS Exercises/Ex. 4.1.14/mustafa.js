/**
 * Objects
• Create an object person with properties firstName, lastName, and a method fullName that returns the
full name.
• Create an object student with properties name, age, and an array of objects representing courses (with
courseName and grade). Write a function to log the student’s name and their course grades.
 */

//Create an object person with properties firstName, lastName, and a method fullName that returns the full name.

/*
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

*/

// Create an object student with properties name, age, and an array of objects representing courses (with courseName and grade). Write a function to log the student’s name and their course grades.


    let student = {
        name: "Ali",
        age: 25,
        courses: [
            { course:"Math", grade: 55 },
            { course:"History", grade: 70 },
            { course:"Chemistry", grade: 80 }
        ],
        logGrades: function() {
            console.log("Student Name: " + this.name);
            console.log("Course Grades:");
            
            for(let i=0;i<student.courses.length;i++){
                console.log(student.courses[i]);
            }
        }
    };
    
    student.logGrades();


    




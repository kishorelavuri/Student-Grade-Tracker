/*

🎯 Mini Project 1: Student Grade Tracker
📌 Concept
An app that stores students’ details (name, marks in subjects) using objects inside an array, 
and calculates results using functions.

*/

let students = [];

// Function to add a student
function addStudents(name, marks) {
    let student = {
        name: name,
        marks: marks
    };
    students.push(student);
}

// Function to calculate average
function avgCalculation(marks) {
    let total = 0;
    let subjects = Object.keys(marks);
    for (let subject of subjects) {
        total += marks[subject];
    }
    let avg = total / subjects.length;
    return avg;
}

// Function to assign grade
function gradeCalculation(avg) {
    if (avg >= 90) return "A+";
    else if (avg >= 80) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else if (avg >= 40) return "D";
    else return "Fail";
}

// Function to display student report
function display() {
    for (let student of students) {
        let avg = avgCalculation(student.marks);
        let grade = gradeCalculation(avg);
        console.log(`Name: ${student.name}`);
        console.log(`Marks: `, student.marks);
        console.log(`Average: ${avg.toFixed(2)} | Grade: ${grade}`);
        console.log("---------------------------------------");
    }
}

// Adding students
addStudents("Ram", { math: 85, science: 90, english: 78 });
addStudents("Sita", { math: 95, science: 88, english: 92 });
addStudents("Kishore", { math: 60, science: 70, english: 55 });

// Displaying reports
display();

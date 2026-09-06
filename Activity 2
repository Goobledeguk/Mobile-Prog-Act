//Main class for MIS
class Instructor { 
  
    #baseSalary = 2000;
   
    constructor(name, age, subject, hours, students ) {
        if (this.constructor === Instructor) {
            throw new Error("Cannot instantiate abstract class Instructor directly.");
        }
        this.name = name;
        this.age = age;
        this.hours = hours;
        this.students = students;
        this.subject = subject;
    }

    displayInfo() {
        console.log(`Instructor Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Workload: ${this.hours} hours per week.`);
        console.log(`Number of Students: ${this.students}`);
    }


    totalSalary(units, rate) {
        const salary = units * rate;
        console.log(`Salary: $${salary}`);
        return salary;
    }
}

// Full-time instructor
class FullTimeInstructor extends Instructor {
    constructor(name, age, subject, hours, students, benefits) {
        super(name, age, subject, hours, students  );
        this.benefits = benefits;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Benefits: $${this.benefits}`);
    }

    totalSalary(units, rate) {
        const salary = (units * rate) + this.benefits;
        console.log(`Salary: $${salary}`);
        return salary;
    }
}

// Part-time instructor
class PartTimeInstructor extends Instructor {
    constructor(name, age, subject, hoursPerWeek, students) {
        super(name, age, subject, hoursPerWeek, students);
        this.hoursPerWeek = hoursPerWeek;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Hours per week: ${this.hoursPerWeek}`);
    }

    totalSalary(units, rate) {
        const salary = units * rate * this.hoursPerWeek;
        console.log(`Salary: $${salary}`);
        return salary;
    }
}

// Subject for defining and adding courses 
class Subject extends Instructor { 
    #course = { 
        code: [], 
        dept: [],
        units: 0
    }

    #semester = {
        sem: [1, 2, 3],
        year: [2021, 2022, 2023]
    }

    courseData(code, dept, sem, year) {
        this.#course.code.push(code);
        this.#course.dept.push(dept);
        this.#semester.sem.push(sem);
        this.#semester.year.push(year);
    }

    courseDetails() {
        return {
            course: this.#course,
            semester: this.#semester
        };
    }
}

// Main for print all 
class Main {
    static renderAll() {
        console.log("Class Management System (MIS clone)");

        const instructorList = [];
        const subjectCatalog = ["MATH101", "PHYS201", "CHEM101", "BIO301"];
        const auditLogs = [];

        const instructor1 = new FullTimeInstructor("John Doe", 35, "Mathematics", 5000, 30, 1000);
        const instructor2 = new PartTimeInstructor("Joey De Leon", 28, "Physics", 20, 15, 15, 0);
        const subject1 = new Subject("Wilma Doesn't", 40, "Chemistry", 40, 20);
        const subInstructor = new FullTimeInstructor("Willie Revillame", 50, "Biology", 18, 25, 1500);

        instructorList.push(instructor1, instructor2, subject1, subInstructor);

        subject1.courseData("CHEM101", "Science", 1, 2026);
        subject1.courseData("BIO301", "Biology", 2, 2026);

        for (let i = instructorList.length - 1; i >= 0; i--) {
            const instructor = instructorList[i];
            instructor.displayInfo();
            const salary = instructor.totalSalary(10, 50);

            if (salary > 4000) {
                auditLogs.push(`${instructor.name}: High Pay Grade ($${salary})`);
            } else if (salary >= 2500) {
                auditLogs.push(`${instructor.name}: Standard Pay Grade ($${salary})`);
            } else {
                auditLogs.push(`${instructor.name}: Low Pay Grade ($${salary})`);
            }
            console.log("----------------------------------");
        }

        console.log("PAY GRADE AUDIT");
        for (let i = 0; i < auditLogs.length; i++) {
            console.log(`[INSTRUCTOR #${i + 1}] ${auditLogs[i]}`);
        }
        
        console.log("----------------------------------");

        console.log("COURSE DETAILS CHECK");
        let index = 0;
        const details = subject1.courseDetails();

        while (index < details.course.code.length) {
            const code = details.course.code[index];
            
            if (code === "CHEM101") {
                console.log(`[Minor] ${code} in ${details.course.dept[index]}`);
            } else if (code === "CHEM102") {
                console.log(`[Major] ${code} in ${details.course.dept[index]}`);
            } else {
                console.log(`[Elec] ${code}`);
            }
            index++;
        }
        
        console.log("----------------------------------");

    }
}

Main.renderAll();

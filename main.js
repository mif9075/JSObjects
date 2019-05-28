function Student(firstName, lastName, term){
    this.firstName  = firstName;
    this.LastName   = lastName;
    this.term       = term;
}

function Instructor(firstName, lastName, term){
    this.firstName  = firstName;
    this.LastName   = lastName;
    this.term       = term;
}

let school = new Object();
let student = new Object();
let instructor = new Object();


school.student1 = new Student("Miguel", "Fernandez", "Term2");
school.student2 = new Student("Keevi", "Hicks", "Term2");
school.student3 = new Student("David", "Mora", "Term2");
school.student4 = new Student("Manish", "Singh", "Term2");
school.student5 = new Student("Paul", "", "Term 2");

school.instructor1 = new Instructor("Yury", "Shkoda", "Term2");
school.instructor2 = new Instructor("Ginny", "Gu Tang", "Term2");
school.instructor3 = new Instructor("Colin", "Jaffe", "Term1");

school.name = "Code Immersives";
school.hours = "1030AM - 4PM";
school.terms = ["term1", "term2", "term3"];


console.log(school);


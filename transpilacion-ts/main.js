var Student = /** @class */ (function () {
    function Student(_a) {
        var name = _a.name, lastName = _a.lastName, age = _a.age, level = _a.level, phone = _a.phone, email = _a.email, subjects = _a.subjects;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.level = level;
        this.phone = phone;
        this.email = email;
        this.subjects = subjects;
    }
    return Student;
}());
var dataStudent = {
    name: "Franchezco",
    lastName: "Virgolinie",
    age: 20,
    level: 2,
    phone: "0998462432",
    email: "franchezco@gmail.com",
    subjects: ["Programacion visual", "Proyecto integrador", "Ingles"]
};
var firstStudent = new Student(dataStudent);
console.log(firstStudent);

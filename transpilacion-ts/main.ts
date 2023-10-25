interface Student {
    name:string,
    lastName:string,
    age:number,
    level:number,
    phone: string,
    email:string,
    subjects:string[],
}
class Student {
    name:string
    lastName:string
    age:number
    level:number
    phone: string
    email:string
    subjects:string[]
    constructor({name, lastName, age, level, phone, email, subjects}: Student
        ){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.level = level
        this.phone = phone
        this.email = email
        this.subjects= subjects
    }
}
const dataStudent:Student ={ 
    name: "Franchezco",
    lastName:"Virgolinie",
    age: 20,
    level: 2,
    phone: "0998462432",
    email:"franchezco@gmail.com",
    subjects: ["Programacion visual", "Proyecto integrador", "Ingles"]   
}
const firstStudent= new Student(dataStudent)
console.log(firstStudent)

// const person = {
//     name : "Khôi",
//     sayHello() {
//         console.log("Hello " + this.name)
//     }
// }

// const fn = person.sayHello

// //fn() ==> undefine hoặc lỗi vì this không còn trỏ tới person

// const boundFn = fn.bind(person)

// boundFn(); //==> hello Khôi

this.firstName = "Khôi1"
this.lastName = "Phạm"

const teacher = {
    firstName : "Khôi2",
    lastName : "Phạm",
    getfullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(teacher.getfullName())

const getTeacherName = teacher.getfullName.bind(teacher)

console.log(getTeacherName())
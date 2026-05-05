const teacher = {
    firstName : "Khôi",
    lastName : "Phạm",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

button.onclick = teacher.getFullName.bind(teacher)

const doctor = {
    nickName : "Nick",
    fullName : "Leonardo Da Venci",
    getInfo() {
        console.log(`${this.nickName} ${this.fullName}`)
    }
}

const buttonClick = document.querySelector('#click')
buttonClick.onclick = doctor.getInfo.bind(doctor)
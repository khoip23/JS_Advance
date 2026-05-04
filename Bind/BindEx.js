const teacher = {
    firstName : "Khôi",
    lastName : "Phạm",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

button.onclick = teacher.getFullName.bind(teacher)
const teacher = {
    firstName : "Khôi",
    lastName : "Phạm",


}

const me = {
    firstName : "Khôi1",
    lastName : "Phạm 1",
    showFullNam() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

me.showFullNam.call()
me.showFullNam.call(me)
me.showFullNam.call(teacher)

function animals(name, weight) {
    this.name = name,
    this.weight = weight
}

function chicken(name, weight, legs) {
    animals.call(this, name, weight) //tương tự kế thừa
    this.legs  = legs
}

const khoipham = new chicken('Khoi', 75, 2)
console.log(khoipham)


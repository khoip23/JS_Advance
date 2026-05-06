const teacher = {
    firstname : "Minh",
    lastname : "Thu"
}

function greet (greeting, message) {
    return `${greeting} ${this.firstname} ${this.lastname}. ${message}`
}

let res = greet.apply(teacher, ['hello teach', 'How are you to day?'])
console.log(res)

function animals(name, weigth) {
    this.name = name,
    this.weigth = weigth
}

function parrot(name, weigth, action) {
    animals.apply(this, [name, weigth])
    this.action = action
}

const newParrot = new parrot('blueParrot', 10, 'Fly')
console.log(newParrot)
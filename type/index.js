const Car = {
    name: 'BMW'
}

const Car1 = Car
const Car2 = {
    name: 'BMW'
}

console.log(Car === Car1)
console.log(Car === Car2)

Car1.name = 'Mercedes'

console.log(Car)
console.log(Car1)
(function() {
    console.log('NOW NOW')
})()

;((mes) => {
    console.log(mes)
})('Hello')

const App = (function (){
    const cars = []
    return {
        add(car) {
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index){
            cars.splice(index, 1)
        }
    }
})()
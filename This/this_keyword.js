const iPhone = {
    name: 'iPhone7',
    color: 'Purple',
    weight: 300,

    takePhoto() {
        console.log(this)
    }
}

console.log(iPhone.takePhoto())

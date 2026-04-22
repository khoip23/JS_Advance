//global
var mes = 'abc11111'

;(function() {
    console.log(mes)
})()

//code block
{
    const age = 24
    console.log(age)
}
//không thể gọi ở ngoài phạm vị code block
// console.log(age)

//local scope
;(function logger() {
    var name = 'zxc'
    console.log(name)
})()

//không thể gọi biến name bên ngoài phạm vi hàm
//console.log(name)
Array.prototype.reduce2 = function (callback, res) {
    let i = 0

    if(arguments.length < 2)
    {
        i = 1;
        res = this[0]
    }

    for(; i < this.length; i++)
    {
        res = callback(res, this[i], i, this)
    }
    return res
}

const number = [1, 2, 3, 4, 5]

const res = number.reduce2((total, num) => {
    return total + num;
})
//số 10 là đối số thứ 2 hay còn gọi là giá trị khởi tạo

console.log(res)
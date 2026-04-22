//chế độ nghiêm ngặt
'use strict';

const student = {}

Object.defineProperty(student, 'fullname', {
    value: 'Nguyễn Văn A',
    //cho phép viết lại giá trị hay không
    writable: true
})

student.fullname = 'Nguyễn văn B'

console.log(student)
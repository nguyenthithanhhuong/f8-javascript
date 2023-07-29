/**
 * Kiểu dữ liệu
 * 1. Kiểu dữ liệu nguyên thủy
 *  + Number
 *  + String
 *  + Boolean
 *  + Undefined
 *  + Null
 *  + Symbol
 * 2. Dữ liệu phức tạp
 *  + function
 *  + Object
 */

// Number
var a = 1
var b = 2.5
console.log(a, b)

// String
var fullName = 'Huong Thanh'
console.log(fullName)

// Boolean
var isSuccess = true;
console.log(isSuccess)

// Undefined - Không gán giá trị cho biến
var year
console.log(year)

// Null - Ko có gì
var isNull = null
console.log(isNull)

// Symbol
var id = Symbol('id') // unique
console.log(id)

// function
var myFunction = function() {
    alert('Hii~')
}

myFunction()

// Object

var myObjection = {
    name: 'Huong Thanh',
    age: 19,
    adress: 'ha noi'
}

console.log(myObjection)

var myArray = [
    'JS',
    'PHP',
    'Ruby'
]

console.log(myArray)

// In ra kiểu dữ liệu của biến
console.log(typeof a)

// typeof Null = object
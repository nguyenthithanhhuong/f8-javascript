//Callback

// Là hàm được truyền qua đối số
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    param('Thanh Huong');
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback); //Value:  Thanh Huong

//Example
var course = [
    'JS',
    'PHP',
    'Ruby'
];

course.map(function(course) {
    console.log(course);
});

// JS
// PHP
// Ruby

var htmls = course.map(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join('')); //chuyen ve String
//<h2>JS</h2><h2>PHP</h2><h2>Ruby</h2>

//write function map2 ~ map() method

Array.prototype.map2 = function(callback) {
    for (var i = 0; i < this.length; ++i) {
        callback(this[i], i);
    }
}

course.map2(function(course, index) {
    console.log(index, course);
});

// 0 'JS'
// 1 'PHP'
// 2 'Ruby'
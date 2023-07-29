/**
 * Mảng trong JS
 * 
 * 1. Tạo mảng
 * - Cách tạo
 * - Sử dụng cách nào
 * - Kiểm tra data type
 * 
 * 2. Truy xuất mảng
 * - Độ dài mảng
 * Lấy phần tử theo index
 */

var languages = [ //cach 1
    'Javascript',
    'PHP',
    'Ruby'
];

var languages = new Array( //cach 2
    'Javascript',
    'PHP',
    'Ruby'
);

console.log(languages)

// typeof array = object

// Kiem tra Array
console.log(Array.isArray(languages)); //true

// Lay do dai array
console.log(languages.length); //3

// Lay phan tu theo index
console.log(languages[0]); //Javascrip
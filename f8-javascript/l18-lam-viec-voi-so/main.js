/**
 * Kiểu số trong JS
 * 
 * 1. Tạo giá trị Number
 * + các cách tạo
 * + dùng cách nào, tại sao
 * + kiểm tra data type
 * 
 * 
 * 2. Làm việc với Number
 * + to string
 * + to fixed
 */

//cach tao
var age = 20; //c1 nen dung
var PI = 3.1415926;

var other = new Number(9); //c2
// kiem tra data type
console.log(typeof(age)); //number

//isNaN() - ham so sanh voi gia tri NaN

//2.to string
console.log(age.toString()); //'20'

//2.to fixed
console.log(PI.toFixed()); //3
console.log(PI.toFixed(2)); //3.14
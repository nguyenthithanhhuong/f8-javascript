/**
 * Chuỗi trong JS
 * 1. Tạo chuỗi
 * + Cách tạo chuỗi
 * + Nên dùng cách nào? Lí do?
 * + Kiểm tra data type
 * 
 * 2. Một số case sử dụng backslash
 * 
 * 3. Xem độ dài chuỗi
 * 
 * 4. Chú ý độ dài khi viết code
 * 
 * 5. Template string es6
 */

//1. Tạo chuỗi
var name = 'Huong'; //nên dùng

var fullName = new String('Huong Thanh');

var name = 'Huong \'Thanh\''; // \'==' && \"=="
console.log(name);

//2. Xem độ dài chuỗi
console.log(name.length);

//5.
var firstName = 'Huong';
var lastName = 'Thanh';

console.log('Toi la: ' + firstName + ' ' + lastName);

console.log(`Toi la ${firstName} ${lastName}`); //template string
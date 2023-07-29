// Làm việc với chuỗi

var myString = 'Hoc JS JS';

// 1. length
console.log(myString.length); //9

// 2. Find index
console.log(myString.indexOf('JS', 6)); //8 // Tra ve vi tri dau tien cua chuoi can ti trong chuoi
console.log(myString.lastIndexOf('JS')); // Tra ve vi tri cuoi cung cua chuoi can tim trong chuoi
console.log(myString.search('JS')); // Tra ve vi tri dau tien

// 3. Cut string
console.log(myString.slice(4, 6)); //JS
console.log(myString.slice(-2, -1)); //J

// 4. Replace
console.log(myString.replace('JS', 'Javascrip')); //Hoc Javascrip JS
console.log(myString.replace(/JS/g, 'Javascrip')); //Hoc Javascrip Javascrip

// 5. Convert to upper case
console.log(myString.toUpperCase()); //HOC JS JS

// 6. Convert to lower case
console.log(myString.toLowerCase()); //hoc js js

// 7. Trim
console.log(myString.trim()); //Bo khoang trang o dau va cuoi cua chuoi

// 8. Split
var languages = 'JS, PHP, Ruby';

console.log(languages.split(', ')); //(3) ['JS', 'PHP', 'Ruby']

var language = 'JAVA';
console.log(language.split('')); //(4) ['J', 'A', 'V', 'A']

// 9. Get a character by index
const myString2 = 'Huong Thanh';

console.log(myString2.charAt(0)); //H //Tra ve chuoi rong neu ko chua index
console.log(myString2.charAt(6)); //T
console.log(myString2[1]); //u //Tra ve undefined neu ko chua index
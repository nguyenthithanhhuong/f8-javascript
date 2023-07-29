// Toán tử so sánh

/**so sánh cả value và datatype
 * === 
 * !==
 */

var a = 1
var b = '1'
console.log(a !== b);
console.log(a === b)

// falsy - to bool is false - chuyển đổi kiểu dữ liệu sang boolean có giá trị false
console.log(!!false) //false
console.log(!!0) //false
console.log(!!'') //false
console.log(!!null) //false
console.log(!!underfined) //false
console.log(!!NaN) //false
// các giá trị còn lại là truthy
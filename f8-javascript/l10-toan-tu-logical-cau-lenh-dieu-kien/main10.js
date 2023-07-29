/** Câu lệnh điều kiện, phép so sánh */

var a = 1
var b = 2

var result = 'A' && 'B' && 'C';
console.log('result', result) //C

if (result) {
    console.log('Dieu kien dung') //Dieu kien dung
} else {
    console.log('Dieu kien sai')
}

result = 'A' && NaN && 'B' 
console.log('result', result) //NaN

if (result) {
    console.log('Dieu kien dung')
} else {
    console.log('Dieu kien sai') //Dieu kien sai
}

result = 'A' || 'B'
console.log('result', result) //A

result = NaN || 'A'
console.log('result', result) //A
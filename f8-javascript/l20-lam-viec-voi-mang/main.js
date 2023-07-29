/**
 * Làm việc với aray
 * 
 * 1. to string
 * 2. Join
 * 3. Pop
 * 4. Push 
 * 5. Shift
 * 6. Unshift 
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

var languages = [
    'JS',
    'PHP',
    'Ruby'
];

//1
console.log(languages.toString()); //JS,PHP,Ruby

//2
console.log(languages.join()); //JS,PHP,Ruby
console.log(languages.join(' - ')); //JS - PHP - Ruby

//3
// xoa bo phan tu cuoi mang va tra ve phan tu da xoa
console.log(languages.pop()); //Ruby
console.log(languages); //(2) ['JS', 'PHP']
//khi mang ko co phan tu nao, tra ve undefined

//4
//them phan tu vao mang
console.log(languages.push('Dart'));
console.log(languages); //(3) ['JS', 'PHP', 'Dart']

//5
//xoa phan tu o dau mang va tra ve phan tu da xoa
console.log(languages.shift()); //JS
// mang ko co phan tu nao tra ve undefined

//6
//them phan tu o dau mang va tra ve do dai moi cua mang
console.log(languages.unshift('Dart')); //3
console.log(languages); //(3) ['Dart', 'PHP', 'Dart']

//7
//xoa phan tu bat ki
//tham so t1: vi tri dat con tro, tham so t2: so phan tu se xoa ke tu vi tri dat con tro
languages.splice(1, 1);
console.log(languages); //(2) ['Dart', 'Dart']

//chen them phan tu
//tham so t3: phan tu chen them vao array
languages.splice(1, 0, 'Dart');
console.log(languages); //(3) ['Dart', 'Dart', 'Dart']

//8
// hop nhat 2 array
var languages2 = [
    'Java',
    'JS'
]

console.log(languages.concat(languages2));
//(5) ['Dart', 'Dart', 'Dart', 'Java', 'JS']


console.log(languages) //(3) ['Dart', 'Dart', 'Dart']

//9
// cat phan tu cua mang
// tham so t1: vi tri dau tien muon cat
// tham so t2: vi tri cuoi cung  muon cat
console.log(languages.slice(1, 2)); //['Dart']
console.log(languages) //(3) ['Dart', 'Dart', 'Dart']

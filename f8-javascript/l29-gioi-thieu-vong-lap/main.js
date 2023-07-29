/** 
 * Vòng lặp - loop
 * 
 * 1. for ~ lặp với điều kiện đúng
 * 2. for/in ~ lặp qua key của đối tượng
 * 3. for/of ~ lặp qua value của đối tượng
 * 4. while ~ lặp khi điều kiện đúng
 * 5. do/while ~ lặp ít nhất 1 lần, sau đó lặp khi 
 *      vòng lặp đúng
 */

// vòng lặp for
//in day so tang dan 1-100
for (var i = 1; i <= 100; i++) {
    console.log(i + ' ');
}

// vong lap vo han -> treo trinh duyet


// vòng lặp for...in
// lay key cua doi tuong
// ung dung lay gia tri cua mang, chuoi
var myInfo = {
    name: 'Huong Thanh',
    age: 18
};

for (var key in myInfo) {
    console.log(key);
}
//name
//age

// vòng lặp for...of
var languages = [
    'JS',
    'PHP',
    'Java'
];

for (var value of languages) {
    console.log(value);
}
var myInfo = {
    name: 'Huong Thanh',
    age: 18
};

for (var value of Object.keys(myInfo)) {
    console.log(value);
}
//name
//age

for (var value of Object.values(myInfo)) {
    console.log(value);
}
//Huong Thanh
//18


// vòng lặp while
var i = 1;

while (i <= 10) {
    console.log(i); 
    i++;   
}

// vòng lặp do...while 
var i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// break & continue in loop

//break
for (var i = 0; i < 10; i++) {
    console.log(i);

    if (i >= 5) {
        break;
    }
}
//0
//1
//2
//3
//4
//5


//continue
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
//0
//2
//4
//6
//8

// vòng lặp lồng nhau
// nested loop

var myArray = [
    [1,2],
    [3,4],
    [5,6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}
//1
//2
//3
//4
//5
//6
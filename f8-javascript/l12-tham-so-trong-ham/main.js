/**
 * Tham số trong hàm
 * 
 * 1. Tham số
 * + Định nghĩa: Giá trị truyền vào 1 function
 * + Kiểu dữ liệu: all
 * + Tính private: tham số truyenf vào hàm chỉ sd được trong hàm đó
 * + 1 tham số
 * + Nhiều tham số
 * 
 * 2. Truyền tham số
 * + 1 tham số
 * + Nhiều tham số
 * 
 * 3. Arguments
 * + Đối tượng arguments
 * + Giới thiệu vòng for of
 */

function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}

writeLog('Test message', 'Test 2');

//arrguments
function printArguments() {
    console.log(arguments)
}

printArguments('log1', 'log2', 'log3');

//for of
function printArguments1() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

printArguments1('log1', 'log2', 'log3');
/**
 * 1. Khi function đặt trùng tên: function định nghĩa sau ghi đè function định nghĩa trước
 * 2. Khai báo biến trong hàm: bien chi dc su dung trong fuction
 * 3. Định nghĩa hàm trong hàm
 */

//2.
function showMessage() {
    var name = 'Huong';

    console.log(name);
}



//3.
function showMessage() {
    function showMessage2() {
        console.log('message2');
    }
    showMessage2();
} 

showMessage();
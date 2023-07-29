// Biến
var fullName = 'Nguyen Thi Thanh Huong'
var age = 19

alert(fullName)
alert(age)

/*
Giới thiệu một số hàm built-in
    1.alert
    2.console
    3.confirm
    4.prompt
    5.set timeout
    6.set interval
*/

/*
    1.alert - In  ra thông báo
*/

/*
    2.console 
    + console.log - In ra message
    + console.warn - In ra cảnh báo
    + console.error - In ra lỗi
*/
console.log('Hello')
console.log(fullName)

/*
    3.confirm - In ra hộp thoại xác nhận
*/
confirm('Xác nhận độ tuổi')

/*
    4.prompt - In ra hộp thoại nhập input
*/
prompt('Bạn thích ăn gì?')

/*
    5.setTimeout - Cho một đoạn code chạy sau một khoảng thời gian
    thoigian tính theo mili giây
*/

setTimeout(function() {
    alert('Thong bao')
}, 1000)

/*
    6.setInterval - cho một đoạn code chạy sau một khoảng tg, chạy liên tục
*/
/*
setInterval(function() {
    console.log('Day la log')
}, 1000)
*/
// xoa phan tu trung lap
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//new Set(array) ~ bo ra cac phan tu trong array(ko lap lai)
//[...] ~ rai cac phan tu trong cap ngoac []
console.log([...(new Set(array))]);
// ['a', 'b', 'c']

/**
 * Đệ quy
 * 1. Xác định được điểm dừng
 * 2. Logic handle => Tạo ra điểm dừng
 */

// đq - count down 

function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(5);

// đq - tính giai thừa

function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(5));


//fuctional programing
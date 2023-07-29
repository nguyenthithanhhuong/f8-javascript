// toán tử ba ngôi ~ ternary operator

var course = {
    name: 'JS',
    coin: 250
};

if (course.coin > 0) {
    console.log(`${course.coin} coins`);
} else {
    console.log('Free');
}

//ve t1 ? ve t2 : ve t3
//ve t1 dung -> thuc hien ve t2
//ve t1 sai -> thuc hien ve t3
var result = course.coin > 0 ? `${course.coin} coins` : 'Free';
console.log(result);
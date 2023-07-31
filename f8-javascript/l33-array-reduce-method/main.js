//array reduce() method
//nhan ve mot ket qua duy nhat 

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 500
    }
];

// Total
// use loop 
var totalCoin = 0;

for (var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin); //1650

//use reduce() method
// var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    //accumulator ~ total
    //currentValue ~ coin
    // i++;

    // console.table({
    //     'Luot chay: ': i,
    //     'Bien tich tru ': accumulator
    // });

    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log(originArray);

    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin); //1650


// Tinh tong
var numbers = [100, 200, 220, 200, 480];

var totalCoin = numbers.reduce(function(total, number) {
    return total + number;
})

console.log(totalCoin); //1200

//Flat - Lam phang

var depthArray = [1, 2, [3, 4], 5, 6];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray); //[1, 2, 3, 4, 5, 6]


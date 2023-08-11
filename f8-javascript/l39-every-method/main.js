//every() method
var courses = [
    {
        name: 'JS',
        coin: 600,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];

//use every() method

// var result = courses.every(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result); //false

//define every() method

Array.prototype.every2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                return false;
            }
        }
    }
    return true;
};

var result = courses.every2(function(course, index, array) {
    return course.isFinish;
});

console.log(result); //false

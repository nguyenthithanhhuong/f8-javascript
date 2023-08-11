//some() method

var courses = [
    {
        name: 'JS',
        coin: 600,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];

//use some() method
// var result = courses.some(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result); //true

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result) //true
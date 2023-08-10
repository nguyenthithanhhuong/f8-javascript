//Empty elements of array

var courses = [
    'JS',
    'PHP'
];

courses.length = 10;

for (var index in courses) {
    console.log(courses[index]);
}

//forEach() method
courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});
// JS 0 (10) ['JS', 'PHP', empty × 8]
// PHP 1 (10) ['JS', 'PHP', empty × 8]

//define forEach2()
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        console.log('index: ', index);
    }
}
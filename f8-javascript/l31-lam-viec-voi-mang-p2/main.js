/**
 * Array methods: 
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 */

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

//forEach() ~ duyet qua tung phan tu
courses.forEach(function(course, index) {
    console.log(index, course);
});
// 0 {id: 1, name: 'JS', coin: 250}
// 1 {id: 2, name: 'HTML, CSS', coin: 0}
// 2 {id: 3, name: 'Ruby', coin: 0}
// 3 {id: 4, name: 'PHP', coin: 400}
// 4 {id: 5, name: 'ReactJS', coin: 500}

//every() ~ ktra tat ca phan tu thoa man 1 dieu kien gi do
//tra ve gia tri boolean
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});

console.log(isFree); //false

//some() ~ ktra 1 mang co phan tu thoa man 1 dieu kien gi do
//tra ve gia tri boolean
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});

console.log(isFree); //true

//find() ~ tim kiem
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});

console.log(course); //{id: 3, name: 'Ruby', coin: 0}

//filter()
var courses = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});

console.log(courses);
//(2) [{…}, {…}]
// 0: {id: 3, name: 'Ruby', coin: 0}
// 1: {id: 6, name: 'Ruby', coin: 500}
// length: 2
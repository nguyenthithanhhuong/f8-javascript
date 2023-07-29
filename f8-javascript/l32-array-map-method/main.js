//array map() method
// thay doi phan tu trong mang

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

function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    }
};

var newCourses = courses.map(courseHandler);

console.log(newCourses);

// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'Khoa hoc: JS', coin: 250, coinText: 'Gia: 250'}
// 1: {id: 2, name: 'Khoa hoc: HTML, CSS', coin: 0, coinText: 'Gia: 0'}
// 2: {id: 3, name: 'Khoa hoc: Ruby', coin: 0, coinText: 'Gia: 0'}
// 3: {id: 4, name: 'Khoa hoc: PHP', coin: 400, coinText: 'Gia: 400'}
// 4: {id: 5, name: 'Khoa hoc: ReactJS', coin: 500, coinText: 'Gia: 500'}
// 5: {id: 6, name: 'Khoa hoc: Ruby', coin: 500, coinText: 'Gia: 500'}
// length: 6
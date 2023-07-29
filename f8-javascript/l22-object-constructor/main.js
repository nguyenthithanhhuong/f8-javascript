// Object constructor
// Xây dựng đối tượng

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new User('Huong', 'Dang', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

console.log(author); //User {firstName: 'Huong', lastName: 'Dang', avatar: 'Avatar'}
console.log(user); //User {firstName: 'Vu', lastName: 'Nguyen', avatar: 'Avatar'}

//cach xem lai object constructor
console.log(author.constructor);
// //ƒ User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// Them thuoc tinh rieng
author.title = 'Chia se';
user.comment = 'Hoi dap';

console.log(author); //User {firstName: 'Huong', lastName: 'Dang', avatar: 'Avatar', title: 'Chia se'}
console.log(user); //User {firstName: 'Vu', lastName: 'Nguyen', avatar: 'Avatar', comment: 'Hoi dap'}
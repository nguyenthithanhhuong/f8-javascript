/**
 * 1. prototype la gi? - them duoc thuoc tinh ben ngoai ham object constructor
 * 2. Su dung khi nao?
 */

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
};

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var user1 = new User('Huong', 'Thanh', 'avatar1');
var user2 = new User('Huong', 'Nguyen', 'avatar2');

console.log(user1.className); //F8
console.log(user2.getClassName()); //F8
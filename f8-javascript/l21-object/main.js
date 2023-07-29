var myInfo = {
    'full- name': 'Huong Thanh',
    age: 18,
    address: 'Ha Noi'
};

console.log(myInfo);
// {full- name: 'Huong Thanh', age: 18, address: 'Ha Noi'}

//Them cap key-value vao object
myInfo.class = '12';
myInfo['email'] = 'thankhuoq03@gmail.com';

console.log(myInfo);
//{full- name: 'Huong Thanh', age: 18, address: 'Ha Noi', class: '12', email: 'thankhuoq03@gmail.com'}

//Lay value
console.log(myInfo['full- name']); //Huong Thanh

var key = 'address';
console.log(myInfo[key]); //Ha Noi

//Them key bang bien vao object
var emailKey = 'email';

var myInfo1 = {
    name: 'Huong Thanh',
    age: 18,
    address: 'Ha Noi',
    [emailKey]: 'thankhuoq03@gmail.com'
};

console.log(myInfo1);
//{name: 'Huong Thanh', age: 18, address: 'Ha Noi', email: 'thankhuoq03@gmail.com'}

var myInfo2 = {
    name: 'Huong Thanh', 
    age: 18,             
    address: 'Ha Noi',   
    getName: function() {//method - phuong thuc
        return this.name;//other --> propery - thuoc tinh
    }
};

console.log(myInfo2); //{name: 'Huong Thanh', age: 18, address: 'Ha Noi', getName: ƒ}
console.log(myInfo2.getName()); //Huong Thanh

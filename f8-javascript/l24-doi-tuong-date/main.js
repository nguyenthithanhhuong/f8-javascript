// doi tuong Date

var date = new Date();
console.log(typeof date); //object
console.log(date) //Thu Jul 27 2023 10:38:45 GMT+0700 (Giờ Đông Dương)

var date1 = Date();
console.log(typeof date1); //string
console.log(date1) //Thu Jul 27 2023 10:38:45 GMT+0700 (Giờ Đông Dương)

//lay nam
console.log(date.getFullYear()); //2023

//lay thang
//tra ve gia tri tu 0 - 11, t1 -> 0, t2 -> 2, ..., t12 -> 11
console.log(date.getMonth() + 1); //7

//lay ngay
console.log(date.getDate()); //27

console.log(date.getHours()); //10

//ngay/thang/nam
console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
//27/7/2023
//JS date object mozilla
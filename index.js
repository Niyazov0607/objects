// 1 Talabalar Ob'ekti:

// const student = {
//     name: "shohjahon",
//     age: "18",
//     score: "60",
//     isPassed() {
//          console.log("Hey whats up, l'm " + this.name, + this.age, + this.score >= 60);
//     },
// };
// student.isPassed();

// 2 Autoulov Ob'ekti:

// function carDetails(made, model, year) {
//     this.made = made;
//     this.model = model;
//     this.year = year;
//     this.getInfo = function () {
//         return "Model: " + this.made + ", " + this.model + "," + this.year + "year";
//     }
// }
// const AMG = new  carDetails("Mercedes-Benz-Amg", "Gt 63s coupe ", " 2024 ");
// console.log(AMG.getInfo());

// SECOND VERSION OF THE WRITING A CODE !

// const car = {
//     make: "Mercedes-Benz-Amg",
//     model: "Gt 63s coupe",
//     year: "2024",
//     getInfo() {
//         console.log("This is , " + this.make + ", " + this.model  + ", " + this.year + " year");
//     },
// };
// car.getInfo();

// 3 O'quvchi Ob'ekti:

// function studentInfo(name, year) {
//     this.name = name;
//     this.year = year;
//     this.introduce = function() {
//         return "Name: " + this.name + ", " + this.year + " year student in Ajou University";
//     };
// }
// const shohjahon = new studentInfo("Shohjahon", "2");
// console.log(shohjahon.introduce());

// 4 OB havo malumoti

// const weather = {
//     city: "Los Angles",
//     temperature: "20° C",
//     getTemperature() {
//         console.log("This is " + this.city + ", " + this.temperature);
//     },
// };
// weather.getTemperature();

// 5 task

// Number.prototype.kvadrat = function () {
//     console.log("Result " + "is " + this * this);
// };
// const a = 12;
// a.kvadrat();

// 6 automobil boshqarish

// function carInfo(model, speed) {
//     this.model = model;
//     this.speed = parseInt(speed);
//     this.accelerate = function (amount) {
//         this.speed += amount;
//     };
//     this.brake = function (amount) {
//         this.speed -= amount;
//     };
//     this.getspeed = function () {
//         return "Model: " + this.model + ", " + this.speed + " km/s";
//     };
// }
// const Mercedes = new carInfo("GLE 63s coupe", "150");
// console.log(Mercedes.getspeed());
// Mercedes.accelerate(100);
// console.log(Mercedes.getspeed());
// Mercedes.brake(80);
// console.log(Mercedes.getspeed());

// 7 task

// Array.prototype.yigindi = function () {
//     const arr = this;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log("sum", sum);
// };
// const arr = [1, 20, 3];
// const arr2 = [1, 20, 5];

// arr2.yigindi();
// arr.yigindi();

// 8 Bank hisob raqam

// function BankAccount(cardNumber, balance) {
//     this.cardNumber = cardNumber;
//     this.balance = parseInt(balance);
//     this.deposit = function (amount) {
//         this.balance += amount;
//         return "Deposit:", this.balance;
//     };
//     this.withdraw = function (amount) {
//         this.balance -= amount;
//     };
//     this.checkBalance = function () {
//         return "Card Balance: " + this.balance;
//     };
// }
// const account = new BankAccount("1000", 1000);
// console.log(account.checkBalance());
// account.deposit(4000);
// console.log(account.checkBalance());
// account.withdraw(2000);
// console.log(account.checkBalance());


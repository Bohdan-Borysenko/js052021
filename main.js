/*--TACK#1--Если переменная test равна true, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.--*/

const task_two = prompt("Add for Number")
let test = true;
let i = false;

if (task_two >= i){
    console.log(alert("true"))
} else {
    console.log(test <= task_two + alert("false"));
}


/*--TACK#2--
Найдите количество секунд в сутках--*/

let min = 60;
let sec = 60;
let hour = 24;
const result = min * sec * hour; 
console.log(result);


/*--TACK#3--
В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).--*/

var month = 6;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 10;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 3;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);


/*-TACK#4-
Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s. 
Выведите содержимое этой переменной на экран.--*/

var L=6.28, S;
const R=L/(2*3.14);
S=R*R*3.14
console.log("R = "+R+", S = "+S)


/*-TASK#5 -
Пусть в переменной num хранится число. Определите, четное число или нет. 
Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
(Здесь нужен математический оператор % - остаток от деления)--*/


// TASK#6--Работа с переменными
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let name = "Джон";
let admin = name;
alert(admin);

// Работа с if-else
// TASK#7
//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//  Проверьте работу скрипта при a, равном 1, 0, -3. 

const num_q = prompt('Write the number');
let a = 0;

if(a == 0 ){
    console.log('верно')
}else {
    console.log(a < num_q + 'неверно');
}
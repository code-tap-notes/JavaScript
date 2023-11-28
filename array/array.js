//filter, tạo 1 mảng con thỏa điều kiện nào đó
const ages = [32, 33, 16, 40];

let check = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log("Get every element in the array that has a value of 18 or more:", check);
//find: tìm phần tử đầu tiên
let checkfind = ages.find(checkAdult);
console.log("first element in the array that has a value of 18 or more:", checkfind);
//map : methode xử lý từng phần tử băng hàm đưa vào tham số của map
const numbers = [4, 9, 16, 25];
let checkmap = numbers.map(Math.sqrt);
console.log("The Array.map() method creates a new array from the results of calling a function for every element", checkmap);
//reduce: ví dụ hàm trừ từ trái qua phải, dạng tích lũy, có thể cộng, nhân...
const mangnumbers = [175, 50, 25];

let checkreduce = mangnumbers.reduce(myFunc);

function myFunc(total, num) {
    return total - num;
}
console.log("The Array.map() method creates a new array from the results of calling a function for every element", checkreduce);
//sort 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("sort", fruits.sort());
console.log("reverse", fruits.reverse());
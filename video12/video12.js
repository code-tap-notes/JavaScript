let a = {};
let d = 'Vien';
console.log('type of a:', typeof a);
console.log('type of d: ', typeof d);
// result: type of a: object  type of d string
const person = {
    firstName: "Vien",
    lastName: "Pretceille",
    age: 50,
    eyeColor: "brown",
    chao: function() {
        console.log('Chao ban ');
        return ''
    }
};
console.log(person.chao(), `Name: `, person.firstName);
console.log(person.chao(), person['lastName'], 'eye ', person['eyeColor']);
let e = 'lastName';
person[e] = 'Nguyen';
//lenh tuong duong person.lastName = 'Nguyen';
console.log(person.chao(), `Ho khai sinh: `, person['lastName']);
// gan lai mot thanh phan cua doi tuong
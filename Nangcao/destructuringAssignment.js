//... toan tu copy
let arr1 = [1, 2, 3, 4]
console.log('array 1', arr1);
let arr2 = [...arr1]
    //  toan tu copy arr1
console.log('array 2', arr2);
let arr3 = [0, ...arr1, 5, 6]
console.log('array 2', arr3);
let per = { name: 'Vien', age: 45 }
    // per la object phai dung ngoac nhon 
let { ten, tuoi } = per;
console.log('ket qua thao tac ngan gon', ten, tuoi);
let traicay = ['cam', 'vang'];
// traicay la mang phai dung ngoac vuong 
let [loai, mau] = traicay;
console.log('trai', loai, 'mau ', mau);
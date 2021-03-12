// bai 1, dung bien tam, dung vong for chay nguoc
// str[2]
// let str = 'abc';
// let newStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
// }
// console.log(newStr);

// bai 2
// let str = 'this is a test';
// // output 'This Is A Test';
// // 1.tach thanh cac tu nho
// let strs = str.split(' ');
// console.log(strs);
// 2. viet hoa chu cai dau cua tung tu
// let newStr = '';
// // for (let i = 0; i < strs.length; i++) {
// //     let strCon = strs[i];
// // }
// for (let tu of strs) {
//     // str[0] = 'a'
//     // di qua tung phan tu cua tu, chuyen ky tu dau
//     // thanh chu viet hoa
//     // gan vao newStr
//     for (let i = 0; i < tu.length; i++) {
//         if (i === 0) {
//             newStr += tu[i].toUpperCase();
//         } else {
//             newStr += tu[i];
//         }
//     }
//     newStr += ' ';
// }
// console.log(newStr);

// bai 3
let arr = ['one','two','three','one','one',
            'four','five','four','five'];
// tạo 1 mảng lưu kết quả
// let newArr = [];
// // đi qua từng phần tử trong mảng gốc
// for (element of arr) {
//     if (newArr.includes(element)) {
//         // không add vào mảng kết quả
//     } else {
//         // nếu mảng lưu kết quả không chứa phần tử đó,
//         // thì add vào mảng lưu kết quả
//         newArr.push(element);
//     }
// }
// console.log(`array goc: ${arr}`);
// console.log(`array kết quả: ${newArr}`);
console.log([...new Set(arr)]);


// bai 4
// tao mang employee chua 3 phan tu
const employees = [
    {
        name: 'Hung',
        age: 25,
        position: 'dev',
    },
    {
        name: 'Phong',
        age: 27,
        position: 'manager',
    },
    {
        name: 'Loc',
        age: 20,
        position: 'dev moi',
    },
]

while (true) {
    // loop, cho nguoi dung nhap lenh
    const command = prompt('Enter command: C, R, U, D:');
    // check lenh, if else
    if (command === 'R') {
        const str = 'Danh sach nhan vien:\n';
        for (const employee of employees) {
            str += `Ten: ${employee.name}, Tuoi: ${employee.age}, Vi tri: ${employee.position}`;
        }
        alert(str);
    } else if (command === 'C') {
        // 3 propmt, nhap cac truong ten, tuoi, vi tri
        // tao 1 object moi, push vao mang
    }
    // delete cho nguoi dung nhap index
    // dung arr.splice(index, 1)

    // update cho nguoi dung nhap index
    // 3 propmt, nhap cac truong ten, tuoi, vi tri
    // arr[index].name = nameInput
    // cac truong con lai, tuong tu
}
// bai 5
// check nam
// check ngay va check thang
// if (check dieu kien thang 1, 3, 5, 7, 8, 10, 12) {
//     // check ngay trong khoang 1-31
// } else if (check dieu thang 2)
//     // check nam % 4 === 0 && nam % 100 !== 0
//         // check ngay trong khoang 1-29
//     // else
//         // check ngay trong khoang 1-28
// } else if (check thang 4, 6, 9, 11) {
//     // check ngay trong khoang 1-30
// } else {
//     // thang khong hop le
// }
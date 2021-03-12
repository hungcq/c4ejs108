// alert('hello');

let Hung = {
    tuoi: 25,
    chieuCao: 180,
    congViec: 'lap trinh'
}

let movie = {
    title: 'batman',
    year: 2012,
    rate: 8.4,
}

// cach dung .
// console.log(movie.title);

// cach dung object['prop']
// console.log(movie['title']);
// let propName = 'year';
// console.log(movie[propName]); // movie['year'] ~ movie.year

// // đọc tên thuộc tính từ người dùng
// let input = prompt('nhap ten thuoc tinh');
// // in ra giá trị qua console/alert
// console.log(movie[input]);

movie.rate = 8.7;
console.log(movie);
// giam di 0.5
movie.rate = movie.rate - 0.5;
console.log(movie); // rate = 8.2

// lay ten thuoc tinh tu nguoi dung
let input = prompt('nhap ten thuoc tinh');
// lay gia tri thuoc tinh tu nguoi dung
let value = prompt('nhap gia tri thuoc tinh');
// update gia tri cua object
movie[input] = value;
// in ra
console.log(movie);
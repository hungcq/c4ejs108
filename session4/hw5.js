const products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: '428',
        color: 'White',
        category: 'Charger',
        providers: ['Phukienzero', 'Dientuccc'],
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: '5487',
        color: 'Black',
        category: 'Phone',
        providers: ['Tgdd', 'Ddghn', 'VhStore'],
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: '21490',
        color: 'Gray',
        category: 'Phone',
        providers: ['Tgdd'],
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: '8490',
        color: 'Blue',
        category: 'Phone',
        providers: ['Tgdd'],
    },
]

// 5.1
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log('--------------------------------')
// }

// 5.2, 5.4
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(`#${i + 1}. ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Providers: ${product.providers.join(' ')}`);
    console.log('--------------------------------')
}
// let position = Number(prompt('Enter product position:'));
// // check vi tri co hop le khong, khong hop le thi nhap lai
// while (position < 1 || position > products.length) {
//     position = Number(prompt('Invalid position. Enter product position:'));
// }
// const product = products[position - 1];
// console.log(`Name: ${product.name}`);
// console.log(`Brand: ${product.brand}`);
// console.log(`Price: ${product.price}`);
// console.log(`Color: ${product.color}`);
// console.log(`Category: ${product.category}`);

// 5.3
// let category = prompt('Enter category:');
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     if (product.category === category) {
//         console.log(`Name: ${product.name}`);
//         console.log(`Price: ${product.price}`);
//         console.log('--------------------------------')
//     }
// }

// 5.5
let provider = prompt('Enter provider:');
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // cach 1: dung ham includes cua array
    // if (product.providers.includes(provider)) {
    //     console.log(`Name: ${product.name}`);
    //     console.log(`Price: ${product.price}`);
    //     console.log(`Providers: ${product.providers.join(' ')}`);
    //     console.log('--------------------------------')
    // }
    // cach 2: dung bien tam contained. check voi tung provider cua product.
    // neu co provider day thi set contained bang true
    let contained = false;
    for (prov of product.providers) {
        if (prov === provider) {
            contained = true;
            break;
        }
    }
    if (contained) {
        console.log(`Name: ${product.name}`);
        console.log(`Price: ${product.price}`);
        console.log(`Providers: ${product.providers.join(' ')}`);
        console.log('--------------------------------')
    }
}
function randomFunction() {
    // random number from 0 to x
    let random = Math.floor(Math.random() * 11);
    return random;
}

function randomNum(a, b) {
    // random a number x from 0 to b - a
    let random = Math.floor(Math.random() * (b - a));
    // return a + x
    return a + random;
}

// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));
// console.log(randomNum(5, 10));

function calDistance(x1, y1, x2, y2) {
    // distance = Math.sqrt((x1-x2) * (x1-x2) + (y1-y2) * (y1 - y2))
    let distance = Math.sqrt((x1-x2) * (x1-x2) + (y1-y2) * (y1 - y2));
    return distance;
}

// return 10
console.log(calDistance(1,2,7,10));

// fetch gan gia tri vao bien data
let quote = data.contents.quotes[0].quote;

let id = data.contents.quotes[0].id;

function convertToEmbedUrl(youtubeUrl) {
    return youtubeUrl.replace("watch?v=", "embed/");
}
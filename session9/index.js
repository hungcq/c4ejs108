// function tinhTong(a, b) {
//     let tong = a + b;
//     return tong;
// }

// let strVietHoa = "abcd".toUpperCase();

// let a = 10;
// let b = 5;
// let sum = tinhTong(a, b);
// console.log("sum = " + sum);

// let str1 = "ab";
// let str2 = "cd";
// // add and upper "ABCD"

// function addAndUpper(str1, str2) {
//     let strResult = str1 + str2;
//     strResult = strResult.toUpperCase();
//     return strResult;
// }

// let result = addAndUpper(str1, str2);
// console.log(result);

// async function getAPI() {
//   // doi lay ket qua
//   // sau khi co ket qua thi gan vao bien response
//   let response = await fetch(
//     "https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json"
//   );
//   // HTTP GET response
//   console.log(response);
//   // parse response
//   // chuyen response thanh mang
//   // cac json object
//   let data = await response.json();
//   console.log(data);
//   // data array of object
//   // lay tung item o trong mang ra
//   // lay cau trich dan, them vao ul
//   let ul = document.getElementById("ul");
//   for (let i = 0; i < data.length; i++) {
//     // lay item o index i
//     let item = data[i];
//     console.log(item);
//     // document.createElement
//     let quoteText = item.quoteText;
//     // them 1 li moi vao ul
//     ul.innerHTML += `<li>${quoteText}</li>`;
//   }
//   console.log(ul);

//   let option = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Quan",
//       job: "Massage for dev",
//     }),
//   };
//   const res = await fetch("https://reqres.in/api/users", option);
//   console.log(await res.json());
// }

// getAPI();

async function getUserAPI() {
  let promise = fetch("https://reqres.in/api/users");
  console.log(promise);

  promise.then(function(response) {
      console.log(response);
      return response.json();
  }).then(function(parseResult) {
        console.log(parseResult);
  });
  

//   let parseRes = await response.json();
//   // console.log(parseRes);

//   let users = parseRes.data;
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     console.log(users[i].first_name);
//   }
}

getUserAPI();

// async function postUserAPI() {
//   let option = {
//       // loai request - o day la POST
//     method: "POST",
//     // thong tin phu chu request (header)
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     // noi dung request
//     body: JSON.stringify({
//       name: "Quan",
//       job: "Massage for dev",
//     }),
//   };
//   const res = await fetch("https://reqres.in/api/users", option);
//   console.log(await res.json());
// }

// postUserAPI();
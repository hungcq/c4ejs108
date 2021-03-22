function alertFunction() {
  alert("how are you");
}

function writeText() {
  document.write("welcome to Javatpoint");
}

function hocbai(callback) {
    setTimeout(function() {
        console.log("da hoc xong");
        callback();
    }, 2000);
}

function dingu() {
    console.log("zzzzz");
}

hocbai(dingu);
let a = "78987"

console.log(a.split("").join(""));

function isPolindrome(a) {
    if (a.split("").join("") == a.split("").join("")) {
        console.log(true);
    } else {
        console.log(false);

    }
}

isPolindrome(a)
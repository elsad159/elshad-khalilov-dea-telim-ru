let a = "78987"

function isPolindrome(a) {
    if (a.split("").reverse().join("") == a.split("").join("")) {
        console.log(true);
    } else {
        console.log(false);

    }
}

isPolindrome(a)
let array1 = [2, 7, 13, 24, 47]

let array2 = [27, 31, 37, 44, 57, 123, 432]

let array3 = array1.concat(array2)

array3.sort((a, b) => {
    return a - b
})

console.log(array3);

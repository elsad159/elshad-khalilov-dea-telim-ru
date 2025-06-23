let countOfStars = 1;
let totalLines = 3;

for (let i = 0; i < totalLines; i++) {
    let stars = "*".repeat(countOfStars);
    console.log(stars);
    countOfStars += 3;
}

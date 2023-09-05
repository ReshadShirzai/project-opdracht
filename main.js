function getrandomnumber() {
    return Math.floor(Math.random() * 6) + 1;
}

const randomNumber = getrandomnumber();
console.log(randomNumber);
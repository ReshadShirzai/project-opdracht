function getrandomnumber() {
    return Math.floor(Math.random() * 6) + 1;
}

const randomNumber = getrandomnumber();

const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    console.log(randomNumber);
});

const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    const randomNumber = getrandomnumber(); // Genereer een nieuw willekeurig nummer
    console.log(randomNumber);
});


let computerScore = 0;
let playerScore = 0;


let computerScore = 0;
let playerScore = 0;



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
<<<<<<< HEAD
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
=======
    return Math.floor(Math.random() * (max - min + 1) + min);
>>>>>>> 52548d0891899b085ea79b343facd596a843f0e0
 }

function getRandomNumber() {
    return getRandomIntInclusive(1, 6);
}

const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    console.log(getRandomNumber());
});


let diceOne = getRandomNumber();
let diceTwo = getRandomNumber();
let total = diceOne + diceTwo;

console.log('Dobbelsteen 1: ', diceOne);
console.log('Dobbelsteen 2: ', diceTwo);
console.log('Gegooide dobbelstenen: ', total);


setTimeout(function(){
    let diceThree = getRandomNumber();
    let diceFour = getRandomNumber();
    total = diceThree + diceFour;

    console.log('Dobbelsteen 3: ', diceThree);
    console.log('Dobbelsteen 4: ', diceFour);
    console.log('Gegooide dobbelstenen computer: ', total);
<<<<<<< HEAD
}, 3000);
>>>>>>> 08d1847313ffefe4448ff7ee7919192ee98cf307
=======
}, 3000);
>>>>>>> 52548d0891899b085ea79b343facd596a843f0e0

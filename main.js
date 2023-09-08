






let computerScore = 0;
let playerScore = 0;



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
 }

function getRandomNumber() {
    return getRandomIntInclusive(1, 6);
}

const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    const randomNumber = getRandomNumber(); // Genereer een nieuw willekeurig nummer
    console.log(randomNumber);



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
}, 3000);
});

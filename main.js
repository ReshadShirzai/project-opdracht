let computerScore = 0;
let playerScore = 0;


const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    console.log(randomNumber1 + " " + randomNumber2); // Voeg een spatie tussen de getallen toe
    const dobbel1 =document.querySelector(".dobbel1")
    const dobbel2 =document.querySelector(".dobbel2")
    dobbel1.src = "img/dobbel" +randomNumber1+ ".png" 
    dobbel2.src = "img/dobbel" +randomNumber2+ ".png" 
}); 
console.log('hallo')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

function getRandomNumber() {
    return getRandomIntInclusive(1, 6);
}



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


//r.i.p Pascal
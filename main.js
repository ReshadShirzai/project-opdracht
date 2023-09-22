let computerScore = 0;
let playerScore = 0;

let randomNumber1 = 0;
let randomNumber2 = 0;

const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    randomNumber1 = getRandomNumber();
    randomNumber2 = getRandomNumber();
    console.log(randomNumber1 + " " + randomNumber2); // Voeg een spatie tussen de getallen toe
    const dobbel1 =document.querySelector(".dobbel1")
    const dobbel2 =document.querySelector(".dobbel2")
    dobbel1.src = "img/dobbel" +randomNumber1+ ".png" 
    dobbel2.src = "img/dobbel" +randomNumber2+ ".png"
}); 
console.log('OK')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

function getRandomNumber() {
    return getRandomIntInclusive(1, 6);
}
let randomNumber3 = getRandomNumber();
let randomNumber4 = getRandomNumber();

let totalPlayer = 0;
let totalComputer = 0;

const btnHigher = document.querySelector('.Hoger');
btnHigher.addEventListener('click', function() {
    totalPlayer = randomNumber1 + randomNumber2;
    totalComputer = randomNumber3 + randomNumber4;
if (totalPlayer > totalComputer){
    let playerwin = document.querySelector('.winner');
    playerwin.innerHTML = "Jij wint!"
    setTimeout(function(){
    playerwin.innerHTML = " "
}, 2000);

    playerScore++;
    computerScore--;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
} else if(totalPlayer < totalComputer) {
    console.log("Computer wint!")
    playerScore--;
    computerScore++;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
} else {
    console.log("Gelijkspel!")
}
});

const BtnLower = document.querySelector('.Lager');
BtnLower.addEventListener('click', function() {
    totalPlayer = randomNumber1 + randomNumber2;
    totalComputer = randomNumber3 + randomNumber4;
if (totalPlayer < totalComputer){
    console.log("jij wint!")
    playerScore++;
    computerScore--;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
} else if(totalPlayer > totalComputer) {
    console.log("Computer wint!")
    playerScore--;
    computerScore++;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
} else {
    console.log("Gelijkspel!")
}
}); 





setTimeout(function(){
    console.log('Dobbelsteen 3: ', randomNumber3);
    console.log('Dobbelsteen 4: ', randomNumber4);
    console.log('Gegooide dobbelstenen computer: ', totalComputer);
}, 3000);

//r.i.p Pascal
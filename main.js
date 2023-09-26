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

//knoppen hoger
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
    cpupoints.innerHTML = computerScore + " " + "punten";
} else if(totalPlayer < totalComputer) {
    console.log("Computer wint!")
    let playerwin = document.querySelector('.winner');
    playerwin.innerHTML = "Jij wint!"
    setTimeout(function(){
    playerwin.innerHTML = " "
}, 2000);
//van de computer
    playerScore--;
    computerScore++;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    cpupoints.innerHTML = computerScore + " " + "punten";
} else {
    console.log("Gelijkspel!")
    let Gelijkspel = document.querySelector('.winner');
    Gelijkspel.innerHTML = "Gelijkspel!"
    setTimeout(function(){
    Gelijkspel.innerHTML = " "
}, 2000);
}
});
//knoppen lager
const BtnLower = document.querySelector('.Lager');
BtnLower.addEventListener('click', function() {
    totalPlayer = randomNumber1 + randomNumber2;
    totalComputer = randomNumber3 + randomNumber4;
if (totalPlayer > totalComputer){
    console.log("jij wint!")
    playerScore++;
    computerScore--;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    cpupoints.innerHTML = computerScore + " " + "punten";
    let playerwin = document.querySelector('.winner');
    playerwin.innerHTML = "Jij wint!"
    setTimeout(function(){
    playerwin.innerHTML = " "
}, 2000);
    
} else if(totalPlayer < totalComputer) {
    console.log("Computer wint!")
    playerScore--;
    computerScore++;
    console.log(playerScore);
    console.log(computerScore);
    let plrpoints = document.querySelector('.plrpoints');
    plrpoints.innerHTML = playerScore + " " + "punten";
    let cpupoints = document.querySelector('.cpupoints');
    cpupoints.innerHTML = computerScore + " " + "punten";
    let cpuwin = document.querySelector('.winner');
    cpuwin.innerHTML = "Computer wint!"
    setTimeout(function(){
        cpuwin.innerHTML = " "
    }, 2000);
} else {
    console.log("Gelijkspel!")
    let draw = document.querySelector('.winner');
    draw.innerHTML = "Gelijkspel!"
    setTimeout(function(){
    draw.innerHTML = " "
}, 2000);
}
}); 





//setTimeout(function(){
//    console.log('Dobbelsteen 3: ', randomNumber3);
//    console.log('Dobbelsteen 4: ', randomNumber4);
//    console.log('Gegooide dobbelstenen computer: ', totalComputer);
//}, 3000);

//r.i.p Pascal
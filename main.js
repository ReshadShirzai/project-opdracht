let computerScore = 0;
let playerScore = 0;

let randomNumber1 = 0;
let randomNumber2 = 0;

const btnHigher = document.querySelector('.Hoger');
const BtnLower = document.querySelector('.Lager');

btnHigher.disabled = true;
BtnLower.disabled = true;
const roll = document.querySelector('.roll');
roll.addEventListener('click', function() {
    randomNumber1 = getRandomNumber();
    randomNumber2 = getRandomNumber();
    console.log(randomNumber1 + " " + randomNumber2);
    const dobbel1 =document.querySelector(".dobbel1")
    const dobbel2 =document.querySelector(".dobbel2")
    dobbel1.src = "img/dobbel" +randomNumber1+ ".png" 
    dobbel2.src = "img/dobbel" +randomNumber2+ ".png"
    btnHigher.disabled = false;
    BtnLower.disabled = false;
    roll.disabled =true;
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

let totalPlayer = 0;
let totalComputer = 0;

//knoppen hoger
btnHigher.addEventListener('click', function() {
    let randomNumber3 = getRandomNumber();
    let randomNumber4 = getRandomNumber();
    totalPlayer = randomNumber1 + randomNumber2;
    totalComputer = randomNumber3 + randomNumber4;
    console.log(randomNumber3+ " " +randomNumber4);
    let dobbel3 =document.querySelector(".dobbel3")
    let dobbel4 =document.querySelector(".dobbel4")
    dobbel3.src = "img/dobbel" +randomNumber3+ ".png" 
    dobbel4.src = "img/dobbel" +randomNumber4+ ".png"
    btnHigher.disabled = true;
    BtnLower.disabled = true;
    roll.disabled = false;
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
    let cpuwin = document.querySelector('.winner');
    cpuwin.innerHTML = "Computer wint!"
    setTimeout(function(){
        cpuwin.innerHTML = " "
    }, 2000);
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
BtnLower.addEventListener('click', function() {
    let randomNumber3 = getRandomNumber();
    let randomNumber4 = getRandomNumber();
    totalPlayer = randomNumber1 + randomNumber2;
    totalComputer = randomNumber3 + randomNumber4;
    console.log(randomNumber3+ " " +randomNumber4);
    let dobbel3 =document.querySelector(".dobbel3")
    let dobbel4 =document.querySelector(".dobbel4")
    dobbel3.src = "img/dobbel" +randomNumber3+ ".png" 
    dobbel4.src = "img/dobbel" +randomNumber4+ ".png"
    BtnLower.disabled = true;
    btnHigher.disabled = true;
    roll.disabled = false;
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
//spelregels knop
const spelknop = document.querySelector('.spelknop');
spelknop.addEventListener('click', function() {
alert("hallo dit is een alert")
});
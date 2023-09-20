const displayNumbers = document.getElementById('list');
const countdown = document.getElementById('countdown');
const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 30;

// funzione numeri casuali
const produceUniqueNumbers = (min, max, tot) => {
    let numbers = [];
    while(numbers.length < tot) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber)  
    }
    return numbers
}

//funzione per recuperare i numeri dall'utente

const getPlayerNumber = (min, max) => {
    let playerNumber;
    while(isNaN(playerNumber) || playerNumber < min || playerNumber > max){
        playerNumber = parseInt(prompt('Inserisci qui il numero'));
    }
    return playerNumber
}

const numbers = produceUniqueNumbers(min, max, totalNumbers);
console.log(numbers)

// Stampo 5 numeri in pagina
let listElement = '';

for (let i = 0; i < totalNumbers; i++) {
    listElement += `<li>${numbers[i]}</li>`;
}

displayNumbers.innerHTML = listElement;


// Mostro il timer
const timer = setInterval(() => {
    if(time === 1) clearInterval(timer);
    countdown.innerText = --time
}, 1000);

// scomparsa  dei numeri dopo 30 secondi

setTimeout(() => {
    displayNumbers.className = 'd-none';
    countdown.className = 'd-none';
}, 30000);

// prompt dopo 30 secondi dall'avvio della pagina
let playerNumbers = [];
setTimeout(() => {

while(playerNumbers.length < totalNumbers) {
    const playerNumber = getPlayerNumber(min, max);
    if(!playerNumbers.includes(playerNumber)) playerNumbers.push(playerNumber)
}

// Conteggio dei punti 
// Inserisco in un array i numeri che l'utente ha ricordato e gli comunico quali ha indovinato
let correctAnswer = [];

for(let i = 0; i < totalNumbers; i++) {
    if(numbers.includes(playerNumbers[i])) correctAnswer.push(playerNumbers[i]);
}

alert(`Hai totalizzato ${correctAnswer.length}! I numeri che hai indovinato sono: ${correctAnswer}`)

}, 30200);


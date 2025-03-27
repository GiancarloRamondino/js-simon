// seleziona le costanti da recuperare
const element = document.querySelector('form');
const number = document.querySelector('ul');
const instructions = document.getElementById('instructions');

// crea numeri randomici da 1 a 100 e inseriscili nella lista come li in ul
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = Math.floor(Math.random() * 50) + 1;
    number.appendChild(li);
}

// aggiungi un conto alla rovescia di 10 secondi
let countdown = 10;
const countdownElement = document.createElement('h2');
instructions.appendChild(countdownElement);

const countdownInterval = setInterval(() => {
    countdownElement.textContent = `${countdown} secondi`;
    countdown--;
    countdownElement.classList.add ('text-center');
    if (countdown < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = '';
    }
}, 1000);

// somma i numeri generati
let somma = 0;
document.querySelectorAll('ul li').forEach(li => {
    somma += parseInt(li.textContent);
});
console.log(somma);

// rendi visibile le cartelle dopo 10 sec e  nascondi  i numeri
setTimeout(() => {
    element.classList.remove('d-none');
    number.classList.add ('d-none');
    instructions.textContent = '';
    instructions.innerText = 'Inserisci tutti i numeri!';
    console.log('Form è ora visibile');
}, 11000);

// aggiungiamo una funzione per assicurarci che non ci siano campi vuoti
function validateForm() {
    // seleziona tutti gli input
    const inputs = document.querySelectorAll('input');
    let isValid = true;

    // controlla se i campi sono vuoti
    inputs.forEach(input => {
        if (input.value === '') {
            isValid = false;
        }
    });

    // se i campi sono vuoti, mostra un messaggio di errore
    if (!isValid) {
        alert('Hey hai dimenticato un numero!');
    }
    return isValid;
}

// aggiungi un event listener al pulsante di conferma
const confirmButton = document.querySelector('button');
confirmButton.addEventListener('click', (event) => {
    event.preventDefault(); // previene il comportamento predefinito del form
    if (validateForm()) {
        calculateResult();
    }
});

// restituamo il risultato doppo aver calcolato la veridicità dei numeri inseriti

function calculateResult() {
    let sum = 0;
    // seleziona tutti gli input
    const inputsTot = document.querySelectorAll('input');
    // somma tutti i numeri inseriti
    inputsTot.forEach(input => {
        sum += parseInt(input.value);
    });
    if (sum === somma) {
        instructions.innerText = 'hai vinto!';
        element.classList.add ('d-none');
        setTimeout(() => {
            location.reload();
        }, 6000);
        // aggiungi un conto alla rovescia di 5 secondi
        let countdownWin = 5;
        const countdownElement = document.createElement('h2');
        instructions.appendChild(countdownElement);
        
        const countdownInterval = setInterval(() => {
            countdownElement.textContent = `Riprovaci tra ${countdownWin} secondi`;
            countdownWin--;
            countdownElement.classList.add ('text-center');
            if (countdownWin < 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = '';
            }
        }, 1000);
    } else {
        instructions.innerText = 'hai perso!';
        element.classList.add ('d-none');
        setTimeout(() => {
            location.reload();
        }, 6000);
        // aggiungi un conto alla rovescia di 5 secondi
        let countdownLose = 5;
        const countdownElement1 = document.createElement('h2');
        instructions.appendChild(countdownElement1);
        
        const countdownInterval1 = setInterval(() => {
            countdownElement1.textContent = `Riprovaci tra ${countdownLose} secondi`;
            countdownLose--;
            countdownElement1.classList.add ('text-center');
            if (countdownLose < 0) {
                clearInterval(countdownInterval1);
                countdownElement1.textContent = '';
            }
        }, 1000);
    }
}


























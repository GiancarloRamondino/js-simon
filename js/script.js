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
}, 10000);

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
        }, 5000);
    } else {
        instructions.innerText = 'hai perso!';
        element.classList.add ('d-none');
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
}


























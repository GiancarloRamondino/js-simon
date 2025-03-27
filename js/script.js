// seleziona le costanti da recuperare
const element = document.querySelector('form');
const number = document.querySelector('ul');

// creea numeri randomici da 1 a 100 e inseriscili nella lista  come li in ul
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = Math.floor(Math.random() * 100) + 1;
    number.appendChild(li);
}

// rendi visibile le cartelle dopo 10 sec e  nascondi  i numeri
setTimeout(() => {
    element.classList.remove('d-none');
    number.classList.add ('d-none');
    console.log('Form is visible');
}, 10000);



















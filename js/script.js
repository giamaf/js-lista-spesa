console.log('JS OK');

//todo --------------- GENERICS --------------- \\  

// Recupero gli elementi dal DOM
const listBox = document.getElementById('list-box');

// Creo la lista della spesa
const buyList = ['latte', 'biscotti', 'acqua', 'pasta', 'frutta', 'verdura'];
console.table(buyList);

// Inizializzo la variabile "stringa" che stamperò in pagina
let listItems = '';

//todo ---------------------------------------- \\  

//* Creo un ciclo 'for' per stampare la lista della spesa in pagina
// for (let i = 0; i < buyList.length; i++) {
//     listItems +=
//         `<div class="form-check m-2">
//              <input class="form-check-input" type="checkbox">
//              <label class="form-check-label">${buyList[i]}</label>
//         </div>`;
// }

// Stampo in pagina agganciando la section del DOM
// listBox.innerHTML = listItems;


//! Creo un ciclo 'while' per stampare la lista della spesa in pagina
// Inizializzo la variabile "contatore"
let i = 0;

while (i < buyList.length) {
    listItems +=
        `<div class="form-check m-2">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">${buyList[i]}</label>
        </div>`;
    i++;
}

// Stampo in pagina agganciando la section del DOM
listBox.innerHTML = listItems;

console.log('JS OK');

// Recupero gli elementi dal DOM
const listBox = document.getElementById('list-box');

// Creo la lista della spesa
const buyList = ['latte', 'biscotti', 'acqua', 'pasta', 'frutta', 'verdura'];
console.table(buyList);

// Inizializzo la variabile "stringa" che stamperò in pagina
let listItems = '';

// Creo un ciclo per stampare la lista della spesa in pagina
for (let i = 0; i < buyList.length; i++) {
    listItems +=
        `<div class="form-check m-2">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label">${buyList[i]}</label>
    </div>`;

}
console.log(listItems);
listBox.innerHTML = listItems;

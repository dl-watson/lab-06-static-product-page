import { cart } from '../pokemon.js';
import { renderTableRow } from './renderCartView.js';
import { calcOrderTotal } from './cart-utils.js';


const tableAnchor = document.querySelector('tbody');


cart.forEach(item => {
    const tr = renderTableRow(item);
    tableAnchor.appendChild(tr);
});


const total = calcOrderTotal(cart);


const tdTotal = document.querySelector('#total');
tdTotal.textContent = `$${total}`;

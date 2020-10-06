// render table items with a for loop

import { cart } from '../pokemon.js';
import { renderTableRow } from './renderCartView.js';
import { calcOrderTotal } from './cart-utils.js';


// the following code assigns an anchor for rendered DOM nodes
// it loops through the cart array and affixes each DOM node to its 
// correct place in the HTML table

const tableAnchor = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderTableRow(item);

    tableAnchor.appendChild(tr);

}

const total = calcOrderTotal(cart);

const tdTotal = document.querySelector('#total');
tdTotal.textContent = `$${total}`;

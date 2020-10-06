// render table items with a for loop

import { calcLineItem, findById } from '../renderView.js';
import { pokemon, cart } from '../pokemon.js';
import { renderTableRow } from './renderCartView.js';


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
tdTotal.textContent = `Total: $${total}`;


// for every item in the cart calcOrderTotal, the price for that
// item is compared against the quantity in order to grab the total

export function calcOrderTotal(cartArray) {

    let total = 0;

    for (const item of cartArray) {
        const selected = findById(pokemon, item.id);
        const subtotal = calcLineItem(item.quantity, selected.price);

        total = total + subtotal;
    }
    return total;
}
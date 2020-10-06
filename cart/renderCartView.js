import { pokemon } from '../pokemon.js';
import { findById } from '../renderView.js';


export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    const selected = findById(pokemon, cartItem.id);

    const item = selected.name;
    tdItem.textContent = item;

    const price = selected.price;
    tdPrice.textContent = `$${price}`;

    tdQuantity.textContent = cartItem.quantity;

    const total = price * cartItem.quantity;
    tdSubtotal.textContent = `$${total}`;

    tr.append(tdItem, tdPrice, tdQuantity, tdSubtotal);

    return tr;
}


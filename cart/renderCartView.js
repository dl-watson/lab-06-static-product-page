import { pokemon } from '../pokemon.js';
import { findById, _cart } from '../renderView.js';
import { setCart, getCart } from './cart-api.js';
import { calcOrderTotal } from './cart-utils.js';

export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    const selectQuantity = document.createElement('select');

    const selected = findById(pokemon, cartItem.id);

    const item = selected.name;
    tdItem.textContent = item;

    const price = selected.price.toFixed(2);
    tdPrice.textContent = `$${price}`;

    console.log(cartItem.quantity);

    // create options
    for (let i = 1; i < 20; i++) {
        const select = document.createElement('option');
        select.text = i;
        selectQuantity.appendChild(select);
    }

    // set default value for select field
    selectQuantity.value = cartItem.quantity;

    // total upon initialization
    const total = price * cartItem.quantity;
    tdSubtotal.textContent = `$${total.toFixed(2)}`;

    // create a change listener for the select field
    selectQuantity.addEventListener('change', (e) => {

        const quantity = e.target.value;
        // mutated total
        const total = price * quantity;
        tdSubtotal.textContent = `$${total.toFixed(2)}`;

        // get cart object
        const cart = getCart(_cart);

        // mutate value
        const selectedObject = findById(cart, cartItem.id);
        selectedObject.quantity = quantity;

        // set cart object
        setCart(_cart, cart);

        // calc total
        const tdTotal = document.querySelector('#total');
        const calcTotal = calcOrderTotal(cart);
        tdTotal.textContent = `$${calcTotal}`;
    });

    tr.append(tdItem, tdPrice, selectQuantity, tdSubtotal);

    return tr;
}

/*


*/
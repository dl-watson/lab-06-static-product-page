import { _cart } from '../renderView.js';
import { getCart, clearCart } from './cart-api.js';
import { renderTableRow } from './renderCartView.js';
import { calcOrderTotal } from './cart-utils.js';

const checkout = document.getElementById('checkout');
const tableAnchor = document.querySelector('tbody');

// get cart from localStorage (initially set from the products page, triggered by the 
// 'add to cart' button listener)
const cart = getCart(_cart) || [];

// for each object in the cart array, generate a cart line item in the table
// this function runs once for each object in the cart array
cart.forEach(item => {
    const tr = renderTableRow(item);
    tableAnchor.appendChild(tr);
});

// calc total
const total = calcOrderTotal(cart);

// set global total: dependent on how many items are in the cart 
const tdTotal = document.querySelector('#total');
tdTotal.textContent = `$${total}`;

// if there are no items in the cart, hide the checkout button
// if there are any items in the cart, display the checkout button
if (cart.length === 0) {
    checkout.classList.toggle('hidden');
}

// checkout button that acts as a refresh/localStorage wipe
checkout.addEventListener('click', () => {
    // displays contents of cart
    alert(JSON.stringify(cart, true, 2));

    // clears localStorage
    clearCart();

    // redirect user to homepage
    window.location.href = '../index.html';
});


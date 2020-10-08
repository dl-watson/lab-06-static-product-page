import { _cart } from '../renderView.js';
import { getCart, clearCart } from '../cart/cart-api.js';
import { renderTableRow } from '../cart/renderCartView.js';
import { calcOrderTotal } from '../cart/cart-utils.js';

const checkout = document.getElementById('checkout');
const tableAnchor = document.querySelector('tbody');


const cart = getCart(_cart) || [];

cart.forEach(item => {
    const tr = renderTableRow(item);
    tableAnchor.appendChild(tr);
});

const total = calcOrderTotal(cart);

const tdTotal = document.querySelector('#total');
tdTotal.textContent = `$${total}`;

if (cart.length === 0) {
    checkout.classList.toggle('hidden');
}

checkout.addEventListener('click', () => {
    // displays contents of cart
    alert(JSON.stringify(cart, true, 2));

    // clears localStorage
    clearCart();

    // redirect user to homepage
    window.location.href = '/';

});


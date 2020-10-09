// import { pokemon } from '../pokemon.js';
import { findById, getPokemonFromLocalStorage } from '../renderView.js';
import { _cart } from '../consts.js';
import { setCart, getCart } from './cart-api.js';
import { calcOrderTotal } from './cart-utils.js';

const pokemon = getPokemonFromLocalStorage();


export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdSubtotal = document.createElement('td');
    const selectQuantity = document.createElement('select');

    // select each item in the cart (renderTableRow will run once for each object in our cart)
    const selected = findById(pokemon, cartItem.id);

    // mutate each line item to populate our table
    const item = selected.name;
    tdItem.textContent = item;

    const price = selected.price.toFixed(2);
    tdPrice.textContent = `$${price}`;

    // for peace of mind
    console.log(cartItem.quantity);

    // create options and append to select (populate dropdown)
    for (let i = 1; i < 20; i++) {
        const select = document.createElement('option');
        select.text = i;
        selectQuantity.appendChild(select);
    }

    // set default value for select field to the quantity selected on the products page
    selectQuantity.value = cartItem.quantity;

    // total (price * quantity) per line item upon initialization
    const total = price * cartItem.quantity;
    tdSubtotal.textContent = `$${total.toFixed(2)}`;

    // create a change listener for the select field
    selectQuantity.addEventListener('change', (e) => {

        // e.target.value is the selected option
        const quantity = e.target.value;

        // mutated total, using e.target.value
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

    // append all mutated DOM nodes in the appropriate order
    tr.append(tdItem, tdPrice, selectQuantity, tdSubtotal);

    return tr;
}

// Your function will need to:

// Retrieve the existing products array
// Push the new product into the array
// Re-save the products array into localStorage
// Your test will:

// Add the product using your function
// Examine the PRODUCT notch in localStorage. Use deepEqual to check that the product is now in localStorage.

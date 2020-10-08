import { findById } from '../renderView.js';
// import { pokemon } from '../pokemon.js';
import { getPokemonFromLocalStorage } from '../renderView.js';

const pokemon = getPokemonFromLocalStorage();

// math helper function
export function calcLineItem(quantity, amount) {
    const result = quantity * amount;
    return Math.round(result * 100) / 100;
}

export function calcOrderTotal(cartArray) {
    let total = 0;

    // for each line item in the cart, calculate the total
    // as a derivation of quantity and price (using our calcLineItem helper function)
    cartArray.forEach(item => {
        const selected = findById(pokemon, item.id);
        const subtotal = calcLineItem(item.quantity, selected.price);

        total += subtotal;
    });

    return total.toFixed(2);
}
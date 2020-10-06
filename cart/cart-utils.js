import { calcLineItem, findById } from '../renderView.js';
import { pokemon } from '../pokemon.js';


export function calcOrderTotal(cartArray) {

    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const selected = findById(pokemon, item.id);
        const subtotal = calcLineItem(item.quantity, selected.price);

        total += subtotal;
    }
    return total;
}
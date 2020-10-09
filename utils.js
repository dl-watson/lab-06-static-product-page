import { getPokemonFromLocalStorage } from '../renderView.js';
import { setCart } from '../cart/cart-api.js';
import { _pokemon } from '../consts.js';

export function addProduct(obj) {

    const staticPokemon = getPokemonFromLocalStorage();

    // push this new object into our products array
    staticPokemon.push(obj);
    // stringify the result and set localStorage
    setCart(_pokemon, staticPokemon);
}
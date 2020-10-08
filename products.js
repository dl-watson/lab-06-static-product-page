import { renderPokemon } from './renderView.js';
import { pokemon } from './pokemon.js';


const anchor = document.getElementById('anchor');

// for each pokemon object (defined in pokemon.js), generate a product card in the DOM
// this function runs once for each object in the pokemon array
pokemon.forEach(obj => {
    const product = renderPokemon(obj);
    anchor.appendChild(product);
});
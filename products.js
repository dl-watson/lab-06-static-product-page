import { renderPokemon } from './renderView.js';
import { pokemon } from './pokemon.js';


const anchor = document.getElementById('anchor');

pokemon.forEach(obj => {
    const product = renderPokemon(obj);
    anchor.appendChild(product);
});
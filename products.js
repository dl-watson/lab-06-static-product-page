import { renderPokemon } from './renderView.js';
import { pokemon } from './pokemon.js';

/*

In your products.js, you will need to:

import your data and your DOM generation function
locate the list element where your products will go
loop through your data
Create a variable that is the singular of your domain list and assign based on the current array index. For example, const fruit = fruits[i];
Pass to your DOM generation function and capture result in variable
Append to the top-level list element

*/

const anchor = document.getElementById('anchor');


for (let i = 0; i < pokemon.length; i++) {
    const obj = pokemon[i];

    const product = renderPokemon(obj);

    anchor.appendChild(product);
}




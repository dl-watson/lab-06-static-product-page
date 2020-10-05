// IMPORT MODULES under test here:
import { renderPokemon } from '../app.js';

const test = QUnit.test;


test('should take in a pokemon and return an li with the appropariate contents', (expect) => {
    const pokemon = {
        id: 'mrcruel',
        name: 'Mr. Cruel',
        image: './assets/mrcruel.png',
        description: 'fusion of Mr. Mime and Tentacruel',
        category: 'pokemon',
        price: 12.99
    };

    const expected = `<div><h2>Mr. Cruel</h2><p>fusion of Mr. Mime and Tentacruel</p><img src="./assets/mrcruel.png" alt="mrcruel"><p>$12.99</p><button>Add to Cart</button></div>`;

    const actual = renderPokemon(pokemon);

    expect.equal(actual.outerHTML, expected);
});

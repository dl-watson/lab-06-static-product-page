// IMPORT MODULES under test here:
import {
    renderPokemon,
    findById,
    calcLineItem
} from '../renderView.js';


const test = QUnit.test;

// set up some hard coded data
const spot = {
    id: 'spot',
    type: 'doggy',
    weight: 5
};

const douglas = {
    id: 'douglas',
    type: 'doggy',
    weight: 12
};

const jumpy = {
    id: 'jumpy',
    type: 'froggy',
    weight: 1
};

const myArray = [
    spot,
    douglas,
    jumpy
];

test('findById should take in an id and an array and return the matching object', function (assert) {

    const myId1 = 'spot';
    const myId2 = 'jumpy';
    const expected1 = spot;
    const expected2 = jumpy;

    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);

    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});



test('renderPokemon should take in a pokemon and return an li with the appropriate contents', (expect) => {
    const pokemon = {
        id: 'mrcruel',
        name: 'Mr. Cruel',
        image: '../assets/mrcruel.png',
        description: 'fusion of Mr. Mime and Tentacruel',
        category: 'pokemon',
        price: 12.99
    };

    const expected = `<div class="product"><h2>Mr. Cruel</h2><p>fusion of Mr. Mime and Tentacruel</p><img src="../assets/mrcruel.png" alt="mrcruel"><p>$12.99</p><button value=\"mrcruel\">Add to Cart</button></div>`;

    const actual = renderPokemon(pokemon);

    expect.equal(actual.outerHTML, expected);
});


/* 
Step 4: TDD calcLineItem Function
TDD for a function that lives in /utils.js called calcLineItem. 
This function takes quantity and an amount and returns the total. 
Due to how JavaScript uses floating point numbers, you may need to round 
the result to two decimal places using: Math.round(amount * 100) / 100

*/

test('calcLineItem should take in a quantity and a price and return the total', (expect) => {

    const quantity = 2;
    const price = 4;

    const expected = 8;
    const actual = calcLineItem(quantity, price);

    expect.equal(actual, expected);
});

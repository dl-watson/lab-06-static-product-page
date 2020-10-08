// IMPORT MODULES under test here:
import {
    renderPokemon,
    findById,
    calcLineItem
} from '../renderView.js';

import {
    getCart,
    setCart
} from '../cart/cart-api.js';

import {
    renderTableRow
} from '../cart/renderCartView.js';

import {
    calcOrderTotal
} from '../cart/cart-utils.js';

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

    const expected = `<div class=\"product\"><h2>Mr. Cruel</h2><p>fusion of Mr. Mime and Tentacruel</p><img src=\"../assets/mrcruel.png\" alt=\"mrcruel\"><p>$12.99</p><button value=\"mrcruel\">Add to Cart</button><p>0 selected</p></div>`;
    const actual = renderPokemon(pokemon);

    expect.equal(actual.outerHTML, expected);
});


test('calcLineItem should take in a quantity and a price and return the total', (expect) => {

    const quantity = 2;
    const price = 4;

    const expected = 8;
    const actual = calcLineItem(quantity, price);

    expect.equal(actual, expected);
});


test('renderTableRow should take in a cart line item and returns a populated DOM table element', (expect) => {
    const cartItem = {
        id: 'butterduck',
        quantity: 1
    };

    const expected = `<tr><td>Butterduck</td><td>$4.99</td><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select><td>$4.99</td></tr>`;

    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);
});

test('calcOrderTotal should take in the cart array and return the total', (expect) => {

    const cart = [
        {
            id: 'butterduck',
            quantity: 1
        },
        {
            id: 'chanchoke',
            quantity: 1
        },
        {
            id: 'mrcruel',
            quantity: 2
        },
        {
            id: 'slowlithe',
            quantity: 3
        },
        {
            id: 'wigglywrath',
            quantity: 5
        },
        {
            id: 'weepinduo',
            quantity: 8
        },
    ];

    const expected = 85.8;
    const actual = calcOrderTotal(cart);

    expect.equal(actual, expected);
});

test('getCart and setCart should correctly stringify and set things in local storage', function (assert) {

    //Arrange
    // Set up your parameters and expectations
    const sammy = {
        id: 'meow',
        weight: 4,
        color: 'calico'
    };
    const key = 'CAT';

    //Act 
    // Call the function you're testing and set the result to a const
    setCart(key, sammy);
    const newSammy = getCart(key);
    const localStorageSammy = JSON.parse(localStorage.getItem(key));

    //Assert
    // Make assertions about what is expected versus the actual result

    // all three of these (sammy, newSammy, localStorageSammy) should be the same if we did our work right
    assert.deepEqual(sammy, newSammy);
    assert.deepEqual(newSammy, localStorageSammy)
});

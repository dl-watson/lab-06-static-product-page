import {
    getCart,
    setCart
} from '../cart/cart-api.js';

export const _cart = '_cart';

export function calcLineItem(quantity, amount) {
    const result = quantity * amount;
    return Math.round(result * 100) / 100;
}


export function findById(givenArray, givenId) {
    return givenArray.filter(item => item.id === givenId)[0];
}


export function renderPokemon(pokemon) {

    const product = document.createElement('div');

    const name = document.createElement('h2');
    const description = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const selected = document.createElement('p');

    product.classList.add('product');


    name.textContent = pokemon.name;

    description.textContent = pokemon.description;

    image.src = `../assets/${pokemon.id}.png`;
    image.alt = pokemon.id;

    price.textContent = `$${pokemon.price.toFixed(2)}`;

    button.textContent = 'Add to Cart';
    button.value = pokemon.id;

    // giving "x selected" p tag a default persistent value
    const cart = getCart(_cart) || [];
    const selectedProduct = findById(cart, pokemon.id);
    selected.textContent = `${selectedProduct ? selectedProduct.quantity : 0} selected`;


    product.append(name, description, image, price, button, selected);


    button.addEventListener("click", () => {

        console.log(`You clicked on: ${pokemon.name}`);

        const cart = getCart(_cart) || [];

        const selectedProduct = findById(cart, pokemon.id);

        if (selectedProduct === undefined) {
            const addProduct = {
                id: pokemon.id,
                quantity: 1
            };
            selected.textContent = `1 selected`;
            cart.push(addProduct);
        } else {
            selectedProduct.quantity++;
            let num = selectedProduct.quantity;
            selected.textContent = `${num} selected`;
        }

        // save modified array to localStorage using our utility function
        setCart(_cart, cart);
    });


    return product;
}
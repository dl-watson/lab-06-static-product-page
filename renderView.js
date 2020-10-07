export const _cart = '_cart';

export function getCart(key) {
    if (key) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return [];
        // this isn't a correct fix for the "fall-back"
    }
}

export function setCart(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

}


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

    product.classList.add('product');

    name.textContent = pokemon.name;
    product.appendChild(name);

    description.textContent = pokemon.description;
    product.appendChild(description);

    image.src = `../assets/${pokemon.id}.png`;
    image.alt = pokemon.id;
    product.appendChild(image);

    price.textContent = `$${pokemon.price.toFixed(2)}`;
    product.appendChild(price);

    button.textContent = 'Add to Cart';
    button.value = pokemon.id;
    product.appendChild(button);


    button.addEventListener("click", () => {

        console.log(`You clicked on: ${pokemon.name}`);

        const cart = getCart(_cart) || [];

        const selectedProduct = findById(cart, pokemon.id);

        if (selectedProduct === undefined) {
            const addProduct = {
                id: pokemon.id,
                quantity: 1
            };
            cart.push(addProduct);
        } else {
            selectedProduct.quantity++;
        }

        // save modified array to localStorage using our utility function
        setCart(_cart, cart);
    });


    return product;
}
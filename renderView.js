// 

export function calcLineItem(quantity, amount) {
    const result = quantity * amount;
    return Math.round(result * 100) / 100;
}

// 

export function findById(givenArray, givenId) {

    for (let i = 0; i < givenArray.length; i++) {
        const item = givenArray[i];

        if (item.id === givenId) {
            return item;
        }
    }
}

//

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

    return product;

}
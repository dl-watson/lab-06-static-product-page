// import functions and grab DOM elements

// initialize state

/*

<h2>Mr. Cruel</h2>
<p>fusion of Mr. Mime and Tentacruel</p>
<img src="./assets/mrcruel.png" alt="mrcruel">
<p>$12.99</p>
<button>Add to Cart</button>

*/

export function renderPokemon(pokemon) {

    const product = document.createElement('div');

    const name = document.createElement('h2');
    const description = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

    product.classList.add("product");

    name.textContent = pokemon.name;
    product.appendChild(name);

    description.textContent = pokemon.description;
    product.appendChild(description);

    image.src = `../assets/${pokemon.id}.png`;
    image.alt = pokemon.id;
    product.appendChild(image);

    price.textContent = `$${pokemon.price.toFixed(2)}`
    product.appendChild(price);

    button.textContent = "Add to Cart";
    button.value = pokemon.id;
    product.appendChild(button);

    return product;

};
import { getCart, setCart } from "./cart/cart-api.js";

import { _pokemon, _cart } from "./consts.js";

import { pokemon } from "./pokemon.js";

// findById returns the object within a specified array that matches the passed id
export function findById(givenArray, givenId) {
  return givenArray.filter((item) => item.id === givenId)[0];
}

// not 100% on this function
export function getPokemonFromLocalStorage() {
  // grab pokemon array from localStorage
  // call it staticPokemon to differentiate
  let staticPokemon = getCart(_pokemon);

  // if pokemon dne, give the user seeded data
  if (!staticPokemon) {
    // set the cart with the static pokemon data
    setCart(_pokemon, pokemon);
    staticPokemon = pokemon;
  }
  // this val will either be equal to the value of the array in localStorage
  // or it will be equal to seeded data from the pokemon array
  return staticPokemon;
}

export function renderPokemon(pokemon) {
  const product = document.createElement("div");
  const name = document.createElement("h2");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const price = document.createElement("p");
  const button = document.createElement("button");
  const selected = document.createElement("p");

  // mutate each element consistently
  product.classList.add("product");
  name.textContent = pokemon.name;
  description.textContent = pokemon.description;

  image.src = `../assets/${pokemon.id}.png`;
  image.alt = pokemon.id;
  price.textContent = `$${pokemon.price.toFixed(2)}`;
  button.textContent = "Add to Cart";
  button.value = pokemon.id;

  // giving "${num} selected" p tag a default persistent value
  const cart = getCart(_cart) || [];
  const selectedProduct = findById(cart, pokemon.id);
  selected.textContent = `${
    selectedProduct ? selectedProduct.quantity : 0
  } selected`;

  // add to cart button event listener
  button.addEventListener("click", () => {
    // for peace of mind
    console.log(`You clicked on: ${pokemon.name}`);

    // get cart
    const cart = getCart(_cart) || [];

    // get the object we're selecting
    const selectedProduct = findById(cart, pokemon.id);

    // if the selected object is not already in the cart, add it
    // else, if the selected object is already in the cart, increment the quantity

    if (selectedProduct === undefined) {
      const addProduct = {
        id: pokemon.id,
        quantity: 1,
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

  // append all mutated DOM nodes in the appropriate order
  product.append(name, description, image, price, button, selected);

  return product;
}

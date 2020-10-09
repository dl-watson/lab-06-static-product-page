import { addProduct } from '../utils.js';

// create a reference to the HTML form
const form = document.querySelector('form');

// create an event listener triggered on form submit
form.addEventListener('submit', (e) => {

    // prevent default form submission behavior
    e.preventDefault();

    // FormData API setup
    const data = new FormData(e.target);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('description');
    const price = data.get('price');

    // creating a template for a new product entry
    // that's consistent with our existing data model

    // takes data from the form and populates a template object
    const newPokemon = {
        id: id,
        name: name,
        image: image,
        description: description,
        price: Number(price)
    };

    // add to localStorage
    addProduct(newPokemon);

});

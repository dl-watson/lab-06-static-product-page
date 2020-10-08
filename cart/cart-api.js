
// gets a parsed item from local storage with a key lookup
export function getCart(key) {
    return JSON.parse(localStorage.getItem(key));
}

// sets an item to localStorage in the correct format
export function setCart(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

}

// clears localStorage
export function clearCart() {
    localStorage.clear();
}

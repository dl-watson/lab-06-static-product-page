
export function getCart(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setCart(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

}

export function clearCart() {
    localStorage.clear();
}

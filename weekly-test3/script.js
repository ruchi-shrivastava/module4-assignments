const products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
];

let cart = {};

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productName = document.createElement('span');
        productName.textContent = product.name;

        const quantity = document.createElement('span');
        quantity.textContent = cart[product.id] || 0;

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', () => addToCart(product.id));

        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => removeFromCart(product.id));

        productDiv.append(productName, removeButton, quantity, addButton);
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const totalPriceEl = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    for (let productId in cart) {
        const product = products.find(p => p.id == productId);
        const quantity = cart[productId];
        totalPrice += product.price * quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `${product.name} x${quantity} - ${product.price * quantity}`;

        cartItems.appendChild(cartItem);
    }

    totalPriceEl.textContent = totalPrice;
    cartEmpty.style.display = Object.keys(cart).length === 0 ? 'block' : 'none';
}

function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    update();
}

function removeFromCart(productId) {
    if (cart[productId]) {
        cart[productId]--;
        if (cart[productId] === 0) {
            delete cart[productId];
        }
    }
    update();
}

function update() {
    document.getElementById('product-list').innerHTML = '<h2>Products</h2>';
    renderProducts();
    renderCart();
}

// Initial render
renderProducts();

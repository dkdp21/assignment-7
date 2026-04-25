const products = [
    { 
        id: 1, 
        name: "Laptop", 
        price: 50000, 
        desc: "High performance laptop",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop"
    },
    { 
        id: 2, 
        name: "Phone", 
        price: 20000, 
        desc: "Smartphone device",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop"
    },
    { 
        id: 3, 
        name: "Headphones", 
        price: 2000, 
        desc: "Noise cancelling",
        img: "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp"
    }
];



let cart = [];

// Load Products
function loadProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <h4>₹${p.price}</h4>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add to Cart
function addToCart(id) {
let item = cart.find(p => p.id === id);


if (item) {
    item.qty++;
} else {
    let product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
}

updateCart();


}

// Update Cart
function updateCart() {
let cartItems = document.getElementById("cart-items");
let total = 0;
cartItems.innerHTML = "";


cart.forEach(p => {
    total += p.price * p.qty;

    cartItems.innerHTML += `
        <div>
            ${p.name} - ₹${p.price} x ${p.qty}
            <button onclick="removeItem(${p.id})">❌</button>
        </div>
    `;
});

document.getElementById("total").innerText = total;
document.getElementById("cart-count").innerText = cart.length;


}

// Remove Item
function removeItem(id) {
cart = cart.filter(p => p.id !== id);
updateCart();
}

// Toggle Cart
function toggleCart() {
document.getElementById("cart").classList.toggle("hidden");
}

// Checkout
function checkout() {
if (cart.length === 0) {
alert("Cart is empty!");
return;
}
document.getElementById("checkout-section").classList.remove("hidden");
}

// Confirm Order
function confirmOrder() {
let name = document.getElementById("name").value;


if (name === "") {
    alert("Please enter your name!");
    return;
}

document.getElementById("confirmation").innerText =
    "Thank you " + name + "! Your order has been placed.";

cart = [];
updateCart();


}

// Load products on page load
loadProducts();

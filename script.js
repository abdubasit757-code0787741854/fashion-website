// Products array banaya gaya hai jisme 2 products hain
const products = [
    { id: 1, name: 'Dress', price: 50 },
    { id: 2, name: 'Jacket', price: 80 }
];

// Local Storage se cart data load karo
// Agar cart pehle se save nahi hai to empty array use hoga
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Agar products id wala element page par mojood hai
if (document.getElementById('products')) {

    // Products ko page par display karo
    document.getElementById('products').innerHTML = products
        .map(p => `
            <div>
                ${p.name} $${p.price}
                <button onclick="add(${p.id})">Add</button>
            </div>
        `)
        .join('');
}

// Add button click hone par ye function chalega
function add(id) {

    // Selected product ko products array se find karo
    const product = products.find(x => x.id === id);

    // Product ko cart mein add karo
    cart.push(product);

    // Updated cart ko Local Storage mein save karo
    localStorage.setItem('cart', JSON.stringify(cart));

    // Success message show karo
    alert('Added');
}

// Agar cart id wala element page par mojood hai
if (document.getElementById('cart')) {

    // Cart ke tamam products page par display karo
    document.getElementById('cart').innerHTML = cart
        .map(item => `
            <div>
                ${item.name} $${item.price}
            </div>
        `)
        .join('');
}
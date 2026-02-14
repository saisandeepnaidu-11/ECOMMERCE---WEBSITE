// Script for navigation bar
// Product Data
const products = [
    {
        id: 0,
        image: 'img/products/f1.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 1,
        image: 'img/products/f2.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 2,
        image: 'img/products/f3.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 3,
        image: 'img/products/f4.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 4,
        image: 'img/products/f5.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 5,
        image: 'img/products/f6.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 6,
        image: 'img/products/f7.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 7,
        image: 'img/products/f8.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 8,
        image: 'img/products/n1.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 9,
        image: 'img/products/n2.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 10,
        image: 'img/products/n3.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 11,
        image: 'img/products/n4.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 12,
        image: 'img/products/n5.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 13,
        image: 'img/products/n6.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 14,
        image: 'img/products/n7.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    },
    {
        id: 15,
        image: 'img/products/n8.jpg',
        name: 'Cartoon Astronaut T-Shirts',
        brand: 'adidas',
        price: 78,
        description: 'The Gildan Ultra Cotton T-shrit is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.'
    }
];

// Navigation
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Product Rendering
const proContainer = document.querySelector('.pro-container');

function renderProducts() {
    const proContainer = document.querySelector('.pro-container');
    const featuredContainer = document.getElementById('featured-products');
    const newArrivalsContainer = document.getElementById('new-arrivals');

    if (window.location.pathname.includes('shop.html') && proContainer) {
        proContainer.innerHTML = '';
        products.forEach(product => {
            proContainer.innerHTML += createProductHTML(product);
        });
    }

    // Logic for Index Page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        if (featuredContainer) {
            featuredContainer.innerHTML = '';
            // Featured: First 8 products
            products.slice(0, 8).forEach(product => {
                featuredContainer.innerHTML += createProductHTML(product);
            });
        }

        if (newArrivalsContainer) {
            newArrivalsContainer.innerHTML = '';
            // New Arrivals: Next 8 products
            products.slice(8, 16).forEach(product => {
                newArrivalsContainer.innerHTML += createProductHTML(product);
            });
        }
    }
}

function createProductHTML(product) {
    return `
        <div class="pro" onclick="window.location.href='sproduct.html?id=${product.id}'">
            <img src="${product.image}" alt="">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a href="#" onclick="event.stopPropagation(); window.location.href='sproduct.html?id=${product.id}'"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
    `;
}

// Initialize
renderProducts();


// Product Details Logic
if (window.location.pathname.includes('sproduct.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId !== null && products[productId]) {
        const product = products[productId];
        document.getElementById('MainImg').src = product.image;
        document.querySelector('.small-img').src = product.image;
        document.getElementById('pro-name').innerText = product.name;
        document.getElementById('pro-price').innerText = '$' + product.price;
        document.getElementById('pro-desc').innerText = product.description;
    }

    // Add to Cart Logic
    // Add to Cart Logic
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const sizeSelect = document.getElementById('pro-size');
            const qtyInput = document.getElementById('pro-qty');

            if (!sizeSelect || !qtyInput) {
                console.error("Size or Qty input not found");
                return;
            }

            const size = sizeSelect.value;
            const qty = qtyInput.value;

            if (size === 'Select Size') {
                alert('Please select a size');
                return;
            }

            if (!products[productId]) {
                console.error("Product not found for ID:", productId);
                alert('Error: Product not found');
                return;
            }

            const cartItem = {
                ...products[productId],
                size: size,
                qty: parseInt(qty)
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Optional: Check if item already exists and just update qty
            const existingItemIndex = cart.findIndex(item => item.id == cartItem.id && item.size == cartItem.size);
            if (existingItemIndex > -1) {
                cart[existingItemIndex].qty += cartItem.qty;
            } else {
                cart.push(cartItem);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("Cart updated:", cart);
            alert('Product added to cart');
        });
    }
}

// Cart Logic
if (window.location.pathname.includes('cart.html')) {
    const cartTableBody = document.getElementById('cart-table-body');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        if (!cartTableBody) return;
        cartTableBody.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            let subtotal = item.price * item.qty;
            total += subtotal;

            cartTableBody.innerHTML += `
                <tr>
                    <td><a href="#" onclick="removeFromCart(${index}); return false;"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="${item.image}" alt=""></td>
                    <td>${item.name} <br> <small>Size: ${item.size}</small></td>
                    <td>$${item.price}</td>
                    <td><input type="number" value="${item.qty}" min="1" onchange="updateQty(${index}, this.value)"></td>
                    <td>$${subtotal}</td>
                </tr>
            `;
        });

        renderCartTotals(total);
    }

    function renderCartTotals(total) {
        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');
        if (subtotalEl) subtotalEl.innerText = '$ ' + total;
        if (totalEl) totalEl.innerHTML = '<strong>$ ' + total + '</strong>';
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    window.updateQty = function (index, qty) {
        if (qty < 1) qty = 1;
        cart[index].qty = qty;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    renderCart();

    // Checkout Logic
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }
            alert('Order Placed Successfully! Thank you for shopping with TECOS.');
            localStorage.removeItem('cart');
            cart = [];
            renderCart();
            window.location.href = 'index.html';
        });
    }
}

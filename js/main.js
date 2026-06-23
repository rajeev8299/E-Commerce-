/* =========================================
   ShopHub - Main JavaScript
   3D Interactions & Full Functionality
   ========================================= */

'use strict';

// ===== Product Data =====
let productsData = [];

// Initialize products after SVGImages is loaded
function initializeProducts() {
    productsData = [
    {
        id: 1,
        name: "Wireless Noise-Cancel Headphones",
        category: "electronics",
        price: 129.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/headphones1/400/400",
        rating: 4.5,
        reviews: 245,
        badge: "New",
        badgeType: "badge-new",
        description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals."
    },
    {
        id: 2,
        name: "Premium Leather Backpack",
        category: "fashion",
        price: 89.99,
        oldPrice: 129.99,
        image: "https://picsum.photos/seed/backpack1/400/400",
        rating: 5,
        reviews: 189,
        badge: "-30%",
        badgeType: "badge-sale",
        description: "Handcrafted genuine leather backpack with laptop compartment, multiple pockets, and water-resistant coating. Style meets functionality."
    },
    {
        id: 3,
        name: "Ceramic Vase Set of 3",
        category: "home",
        price: 45.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/vase1/400/400",
        rating: 4,
        reviews: 76,
        badge: null,
        badgeType: null,
        description: "Elegant set of 3 ceramic vases in different sizes. Modern minimalist design perfect for any home decor. Each vase is hand-painted."
    },
    {
        id: 4,
        name: "Smart Fitness Watch Pro",
        category: "electronics",
        price: 249.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/watch1/400/400",
        rating: 5,
        reviews: 412,
        badge: "Hot",
        badgeType: "badge-hot",
        description: "Advanced fitness tracking with heart rate monitor, GPS, sleep tracking, and 7-day battery life. Compatible with iOS and Android."
    },
    {
        id: 5,
        name: "Premium Running Shoes",
        category: "fashion",
        price: 79.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/shoes1/400/400",
        rating: 4.5,
        reviews: 328,
        badge: "Popular",
        badgeType: "badge-popular",
        description: "Lightweight running shoes with responsive cushioning, breathable mesh upper, and durable rubber outsole. Perfect for daily runs."
    },
    {
        id: 6,
        name: "LED Desk Lamp with USB",
        category: "home",
        price: 39.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/lamp1/400/400",
        rating: 4,
        reviews: 94,
        badge: null,
        badgeType: null,
        description: "Modern LED desk lamp with adjustable brightness, color temperature control, USB charging port, and touch-sensitive controls."
    },
    {
        id: 7,
        name: "Premium Yoga Mat",
        category: "sports",
        price: 29.99,
        oldPrice: null,
        image: "https://picsum.photos/seed/yoga1/400/400",
        rating: 5,
        reviews: 156,
        badge: "New",
        badgeType: "badge-new",
        description: "Eco-friendly yoga mat made from natural rubber. Non-slip surface, extra thick for joint protection, and includes carrying strap."
    },
    {
        id: 8,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 59.99,
        oldPrice: 79.99,
        image: "https://picsum.photos/seed/speaker1/400/400",
        rating: 4.5,
        reviews: 203,
        badge: "-25%",
        badgeType: "badge-sale",
        description: "Waterproof portable speaker with 360° sound, 12-hour battery, and built-in microphone for hands-free calls."
    }
];
    
    // Render products if we're on the shop page
    renderProducts();
}

// Call initializeProducts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
} else {
    initializeProducts();
}

// ===== State Management =====
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let testimonialIndex = 0;

// ===== Render Functions =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid || productsData.length === 0) return;

    const filtered = currentFilter === 'all'
        ? productsData
        : productsData.filter(p => p.category === currentFilter);

    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}" style="animation: fadeInUp 0.5s ease-out ${index * 0.05}s both;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="action-btn wishlist-action" aria-label="Add to wishlist" data-id="${product.id}">
                        <i class="${wishlist.find(w => w.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="action-btn quick-view-btn" aria-label="Quick view" data-id="${product.id}">
                        <i class="far fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-bottom">
                    <span class="price">$${product.price.toFixed(2)} ${product.oldPrice ? `<s>$${product.oldPrice.toFixed(2)}</s>` : ''}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    attachProductEvents();
}

// ===== Render Best Sellers =====
function renderBestSellers() {
    const grid = document.getElementById('bestsellerGrid');
    if (!grid) return;

    // Show top 8 products (sorted by reviews)
    const sorted = [...productsData].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
    grid.innerHTML = sorted.map((product, index) => `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}" style="animation: fadeInUp 0.5s ease-out ${index * 0.04}s both;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="action-btn wishlist-action" aria-label="Add to wishlist" data-id="${product.id}">
                        <i class="${wishlist.find(w => w.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="action-btn quick-view-btn" aria-label="Quick view" data-id="${product.id}">
                        <i class="far fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-bottom">
                    <span class="price">$${product.price.toFixed(2)} ${product.oldPrice ? `<s>$${product.oldPrice.toFixed(2)}</s>` : ''}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    attachProductEvents();
}

// ===== Best Sellers Tab Filter =====
document.querySelectorAll('.bs-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.bs-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.bs;
        const cards = document.querySelectorAll('#bestsellerGrid .product-card');
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (hasHalf) stars += '<i class="fas fa-star-half-alt"></i>';
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

function attachProductEvents() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id, btn);
        });
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            openQuickView(id);
        });
    });

    document.querySelectorAll('.wishlist-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id, btn);
        });
    });
}

// ===== Initialize Images from Data Attributes (runs as soon as ready) =====
function initializeImages() {
    if (!window.SVGImages) return;

    // Replace [data-img] images
    document.querySelectorAll('img[data-img]').forEach(img => {
        const key = img.dataset.img;
        if (SVGImages[key]) img.src = SVGImages[key]();
    });

    // Replace [data-avatar] images
    document.querySelectorAll('img[data-avatar]').forEach(img => {
        const name = img.dataset.avatar;
        const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'];
        const color = colors[name.charCodeAt(0) % colors.length];
        img.src = SVGImages.avatar(name, color);
    });

    // Replace [data-blog] images
    document.querySelectorAll('img[data-blog]').forEach(img => {
        const key = img.dataset.blog;
        if (SVGImages[key]) img.src = SVGImages[key]();
    });
}

// Run image initialization as soon as DOM is parsed (don't wait for window load)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeImages);
} else {
    initializeImages();
}

// ===== Cart Functions =====
function addToCart(productId, btn) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    flyToCart(btn);
    showToast('Added to Cart', `${product.name} added successfully`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCartItems();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    const countEl = document.querySelector('.cart-count');
    if (countEl) {
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        countEl.textContent = total;
        countEl.style.transform = 'scale(1.4)';
        setTimeout(() => countEl.style.transform = '', 300);
    }
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyEl) emptyEl.style.display = 'flex';
        if (footerEl) footerEl.style.display = 'none';
        return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="price">$${item.price.toFixed(2)}</span>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// ===== Wishlist Functions =====
function toggleWishlist(productId, btn) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.findIndex(w => w.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        if (btn) {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        }
        showToast('Removed from Wishlist', `${product.name} removed`, 'warning');
    } else {
        wishlist.push(product);
        if (btn) {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                btn.style.background = '#ec4899';
                btn.style.color = 'white';
            }
        }
        showToast('Added to Wishlist', `${product.name} saved`, 'success');
    }

    updateWishlistUI();
}

function updateWishlistUI() {
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.textContent = wishlist.length;

    const container = document.getElementById('wishlistItems');
    const emptyEl = document.getElementById('wishlistEmpty');

    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = '';
        if (emptyEl) emptyEl.style.display = 'flex';
        return;
    }

    if (emptyEl) emptyEl.style.display = 'none';

    container.innerHTML = wishlist.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="price">$${item.price.toFixed(2)}</span>
                <button class="btn btn-primary" style="margin-top:0.5rem;padding:0.4rem 0.8rem;font-size:0.8rem;" onclick="addToCart(${item.id}, this);toggleWishlist(${item.id}, null);">
                    Move to Cart
                </button>
            </div>
            <button class="remove-item" onclick="toggleWishlist(${item.id}, null)">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// ===== Quick View Modal =====
function openQuickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <span class="modal-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="modal-rating">
                ${generateStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <div class="modal-price">
                $${product.price.toFixed(2)}
                ${product.oldPrice ? `<span style="color:var(--gray);text-decoration:line-through;font-size:1rem;font-weight:400;margin-left:0.5rem;">$${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            <p class="modal-description">${product.description}</p>
            <ul class="modal-features">
                <li><i class="fas fa-check"></i> Free shipping on orders over $50</li>
                <li><i class="fas fa-check"></i> 30-day return policy</li>
                <li><i class="fas fa-check"></i> Secure checkout</li>
                <li><i class="fas fa-check"></i> In stock - ready to ship</li>
            </ul>
            <div class="modal-actions">
                <div class="qty-control">
                    <button class="qty-btn" onclick="this.nextElementSibling.textContent = Math.max(1, parseInt(this.nextElementSibling.textContent) - 1)">−</button>
                    <span class="qty-value">1</span>
                    <button class="qty-btn" onclick="this.previousElementSibling.textContent = parseInt(this.previousElementSibling.textContent) + 1">+</button>
                </div>
                <button class="btn btn-primary" style="flex:1;" onclick="addToCart(${product.id}, this);document.getElementById('modalClose').click();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('active');
}

// ===== Toast Notifications =====
function showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'check', error: 'times', warning: 'exclamation', info: 'info' };

    toast.innerHTML = `
        <div class="toast-icon"><i class="fas fa-${icons[type] || 'check'}"></i></div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;

    container.appendChild(toast);

    const removeToast = () => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    };

    toast.querySelector('.toast-close').addEventListener('click', removeToast);
    setTimeout(removeToast, 4000);
}

// ===== Fly to Cart Animation =====
function flyToCart(originEl) {
    const cart = document.querySelector('.cart-btn');
    if (!cart || !originEl) return;

    const originRect = originEl.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const flyer = document.createElement('div');
    flyer.className = 'flyer';
    flyer.innerHTML = '<i class="fas fa-shopping-bag"></i>';
    flyer.style.cssText = `
        position: fixed;
        top: ${originRect.top}px;
        left: ${originRect.left}px;
        width: 40px;
        height: 40px;
        background: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        pointer-events: none;
        transition: all 0.8s cubic-bezier(0.5, -0.5, 0.5, 1.5);
        box-shadow: 0 5px 20px rgba(99, 102, 241, 0.5);
    `;

    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
        flyer.style.top = (cartRect.top + cartRect.height/2 - 20) + 'px';
        flyer.style.left = (cartRect.left + cartRect.width/2 - 20) + 'px';
        flyer.style.transform = 'scale(0.3)';
        flyer.style.opacity = '0';
    });

    setTimeout(() => flyer.remove(), 900);
}

// ===== Cart Sidebar Toggle =====
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const continueShopping = document.getElementById('continueShopping');

if (cartToggle && cartSidebar && overlay) {
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    });
}

if (closeCart && cartSidebar && overlay) {
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
}

if (continueShopping && cartSidebar && overlay) {
    continueShopping.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        cartSidebar?.classList.remove('active');
        wishlistSidebar?.classList.remove('active');
        closeQuickView();
    });
}

// ===== Wishlist Sidebar =====
const wishlistToggle = document.getElementById('wishlistToggle');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeWishlist = document.getElementById('closeWishlist');

if (wishlistToggle && wishlistSidebar) {
    wishlistToggle.addEventListener('click', () => {
        wishlistSidebar.classList.add('active');
        overlay?.classList.add('active');
    });
}

if (closeWishlist && wishlistSidebar) {
    closeWishlist.addEventListener('click', () => {
        wishlistSidebar.classList.remove('active');
        overlay?.classList.remove('active');
    });
}

// ===== Modal Close =====
const modalClose = document.getElementById('modalClose');
if (modalClose) modalClose.addEventListener('click', closeQuickView);

const quickViewModal = document.getElementById('quickViewModal');
if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) closeQuickView();
    });
}

// ===== Card add button (hero) =====
document.querySelectorAll('.card-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cart.push({ ...productsData[0], qty: 1 });
        updateCartUI();
        flyToCart(btn);
        showToast('Added to Cart', productsData[0].name + ' added', 'success');
    });
});

// ===== Filter Products =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProducts();
    });
});

// ===== Newsletter Form =====
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const btn = newsletterForm.querySelector('button');
        const email = input.value.trim();

        if (email) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            btn.style.background = '#10b981';
            input.value = '';
            showToast('Subscribed!', `Welcome! Confirmation sent to ${email}`, 'success');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 2500);
        }
    });
}

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===== Search Overlay =====
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            const input = searchOverlay.querySelector('input');
            if (input) input.focus();
        }, 300);
    });
}

if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => searchOverlay.classList.remove('active'));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay?.classList.remove('active');
        closeQuickView();
        cartSidebar?.classList.remove('active');
        wishlistSidebar?.classList.remove('active');
        overlay?.classList.remove('active');
    }
});

// Search tags
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const input = document.getElementById('searchInput');
        if (input) input.value = tag.textContent;
        showToast('Search', `Searching for "${tag.textContent}"...`, 'info');
    });
});

// ===== 3D Card Tilt =====
const heroVisual = document.getElementById('heroVisual');
const cardMain = document.getElementById('cardMain');

if (heroVisual && cardMain) {
    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        cardMain.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
        cardMain.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
    });
}

// ===== Product Cards 3D Tilt =====
function attachTiltEffect() {
    document.querySelectorAll('.product-card, .category-card').forEach(card => {
        if (card.dataset.tiltAttached) return;
        card.dataset.tiltAttached = 'true';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ===== Counter Animation =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + '+';
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// ===== Countdown Timer =====
function startCountdown() {
    const daysEl = document.getElementById('days');
    if (!daysEl) return;

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(endDate.getHours() + 14);
    endDate.setMinutes(endDate.getMinutes() + 35);

    function update() {
        const now = new Date();
        const diff = endDate - now;
        if (diff <= 0) return;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}
startCountdown();

// ===== Testimonial Slider =====
function initTestimonialSlider() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('sliderDots');
    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const totalSlides = cards.length;
    let slidesPerView = 3;

    function updateSlidesPerView() {
        if (window.innerWidth < 768) slidesPerView = 1;
        else if (window.innerWidth < 1024) slidesPerView = 2;
        else slidesPerView = 3;
    }

    function renderDots() {
        const totalDots = Math.max(1, totalSlides - slidesPerView + 1);
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === testimonialIndex ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        const totalDots = Math.max(1, totalSlides - slidesPerView + 1);
        testimonialIndex = Math.max(0, Math.min(index, totalDots - 1));
        const cardWidth = cards[0].offsetWidth + 32; // gap
        track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
        renderDots();
    }

    updateSlidesPerView();
    renderDots();

    window.addEventListener('resize', () => {
        updateSlidesPerView();
        testimonialIndex = 0;
        renderDots();
        track.style.transform = 'translateX(0)';
    });

    // Auto slide
    setInterval(() => {
        const totalDots = Math.max(1, totalSlides - slidesPerView + 1);
        goToSlide((testimonialIndex + 1) % totalDots);
    }, 5000);
}

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open clicked if it wasn't active
        if (!isActive) item.classList.add('active');
    });
});

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Scroll Reveal (lightweight) =====
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-header, .feature-card, .category-card, .blog-card, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    animateOnScroll.observe(el);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!' || this.hasAttribute('data-filter')) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// ===== Header shadow on scroll (passive + throttled) =====
const header = document.querySelector('.header');
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            if (window.scrollY > 10) header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            else header.style.boxShadow = 'none';
            lastScroll = window.scrollY;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ===== Inject Animation Styles (minimal) =====
const style = document.createElement('style');
style.textContent = `.animate-in{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initializeImages();
    renderProducts();
    renderBestSellers();
    attachTiltEffect();
    initTestimonialSlider();
    renderCartItems();
    updateWishlistUI();
});

// Re-attach tilt when new products render
const observer = new MutationObserver(() => attachTiltEffect());
const productsGrid = document.getElementById('productsGrid');
if (productsGrid) observer.observe(productsGrid, { childList: true });

console.log('%c🛍️ ShopHub', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to ShopHub! Modern shopping experience.', 'color: #64748b; font-size: 14px;');

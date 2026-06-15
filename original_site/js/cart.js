
const CART_KEY = 'byelmarie_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item) {
  const cart = getCart();

  const key = item.variant ? `${item.id}_${item.variant}` : `${item.id}`;
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id: item.id,
      slug: item.slug,
      name: item.name,
      price: item.price,
      image: item.image,
      variant: item.variant || null,
      qty: 1,
    });
  }
  saveCart(cart);
}

function removeFromCart(key) {
  let cart = getCart();
  cart = cart.filter(c => c.key !== key);
  saveCart(cart);
}

function updateCartQty(key, qty) {
  const cart = getCart();
  const item = cart.find(c => c.key === key);
  if (item) {
    if (qty <= 0) {
      removeFromCart(key);
      return;
    }
    item.qty = qty;
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartCount();
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const count = getCartItemCount();
  document.querySelectorAll('.cart-count-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCartPage() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');
  const emptyEl = document.getElementById('cart-empty');
  const filledEl = document.getElementById('cart-filled');

  if (!container) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (filledEl) filledEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (filledEl) filledEl.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <div class="cart-item__image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23f0ede8\\'/></svg>'">
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}${item.variant ? ` <span class="cart-item__variant">(${item.variant})</span>` : ''}</div>
        <div class="cart-item__price-unit">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" onclick="updateCartQty('${item.key}', ${item.qty - 1}); renderCartPage();">−</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty('${item.key}', ${item.qty + 1}); renderCartPage();">+</button>
      </div>
      <div class="cart-item__total">${formatPrice(item.price * item.qty)}</div>
      <button class="cart-item__remove" onclick="removeFromCart('${item.key}'); renderCartPage();" aria-label="Remove">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
    </div>
  `).join('');

  const total = getCartTotal();
  if (totalEl) totalEl.textContent = formatPrice(total);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCartPage();
});

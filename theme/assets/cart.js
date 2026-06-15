// Shopify Cart AJAX API handler for BYELMARIE

document.addEventListener('DOMContentLoaded', () => {
  initAjaxAddToCart();
});

function initAjaxAddToCart() {
  // Listen for product form submits (quick add and detail page add)
  document.addEventListener('submit', (e) => {
    const form = e.target;
    
    // Check if it's a cart add form
    if (form.action && form.action.includes('/cart/add')) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      // Submit via Shopify AJAX API
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Chyba při přidávání do košíku');
        }
        return response.json();
      })
      .then(item => {
        // Show success notification on screen
        showCartNotification(item.title);
        
        // Update the cart count badge in the header
        updateShopifyCartCount();
      })
      .catch(error => {
        console.error('Cart error:', error);
      });
    }
  });
}

function updateShopifyCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      document.querySelectorAll('.cart-count-badge').forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    })
    .catch(error => console.error('Error fetching cart count:', error));
}

function showCartNotification(name) {
  const note = document.createElement('div');
  note.className = 'cart-notification';
  note.innerHTML = `<span>✓</span> ${name} – přidáno do košíku`;
  document.body.appendChild(note);
  
  // Trigger transition
  setTimeout(() => note.classList.add('show'), 10);
  
  // Fade out and remove
  setTimeout(() => {
    note.classList.remove('show');
    setTimeout(() => note.remove(), 400);
  }, 2500);
}

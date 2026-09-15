// Shopping Cart (localStorage-based)
const Cart = {
  get() { return JSON.parse(localStorage.getItem('enrovel_cart') || '[]'); },
  
  add(product) {
    const items = this.get();
    const existing = items.find(i => i.id === product.id);
    if (existing) existing.quantity++;
    else items.push({ ...product, quantity: 1, img: product.img || '' });
    localStorage.setItem('enrovel_cart', JSON.stringify(items));
    this.updateUI();
    this.showMessage(product.name + ' added to cart');
  },
  
  remove(id) {
    const items = this.get().filter(i => i.id !== id);
    localStorage.setItem('enrovel_cart', JSON.stringify(items));
    this.updateUI();
  },
  
  updateQty(id, delta) {
    const items = this.get();
    const item = items.find(i => i.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.remove(id);
      } else {
        localStorage.setItem('enrovel_cart', JSON.stringify(items));
        this.updateUI();
      }
    }
  },
  
  updateUI() {
    const items = this.get();
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
    const total = items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    document.querySelectorAll('.cart-total').forEach(el => el.textContent = 'R ' + total.toLocaleString());
  },
  
  showMessage(msg) {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;top:100px;right:20px;background:#3BB8B8;color:#fff;padding:12px 24px;border-radius:8px;z-index:9999;animation:fadeIn 0.3s;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,0.15);';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => Cart.updateUI());

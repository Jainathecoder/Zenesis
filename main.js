document.getElementById('shopBtn').addEventListener('click', () => {
  window.location.href = '#shop';
});

const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('🖤 Added to cart (not really, but vibes only)');
  });
});

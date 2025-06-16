document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.phone button');

  buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const IPHONE= btn.parentElement.querySelector('h3').innerText;
      const 30000 = btn.parentElement.querySelector('p').innerText;
      alert(`✅ You selected: ${IPHONE}\n30000: ${price}`);
    });
  });
});
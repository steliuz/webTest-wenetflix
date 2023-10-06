// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >= 300) {
      navbar.classList.add('bg-changed');
    } else {
      navbar.classList.remove('bg-changed');
    }
  });
  
// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Button alert
const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', () => {
  alert('Button Clicked!');
});

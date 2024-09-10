// Get the menu button and the menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Toggle the main menu visibility
menuButton.addEventListener('click', function() {
  menu.classList.toggle('active');
});


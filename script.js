const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.style.display = 'none';
});

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Get elements
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-btn');


// Function to open menu
function openMenu() {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
}

// Function to close menu
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

// Event listeners
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// Close menu if clicking on overlay
overlay.addEventListener('click', closeMenu);


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', isOpen);
});
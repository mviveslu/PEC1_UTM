let menuOpen = false;
function toggleMenu() {
  const menu = document.querySelector('.header__hamburger__menu');
  const nav = document.querySelector('.header__navbar')
  menuOpen = !menuOpen;
  if (menuOpen) {
    menu.classList.addModifier('change');
    nav.classList.addModifier('show')
  } else {
    menu.classList.removeModifier('change');
    nav.classList.removeModifier('show')
  }
}

const burgerMenu = document.getElementById('burger-menu');
const burgerOpenBtn = document.querySelector('.burger-btn');
const burgerCloseBtn = document.querySelector('.burger-menu-btn');

// Function open .is-open
function openMenu() {
  burgerMenu.classList.add('is-open');
}

// 3. Function close .is-open
function closeMenu() {
  burgerMenu.classList.remove('is-open');
}

// Open burger-menu
burgerOpenBtn.addEventListener('click', openMenu);

// Close menu icon-close
burgerCloseBtn.addEventListener('click', closeMenu);

// Close to use link nav-menu
const burgerNavLinks = document.querySelectorAll('.burger-menu-link');

burgerNavLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// Close menu to use button order
const orderNowLink = document.querySelector('.burger-menu-bnt-order');

orderNowLink.addEventListener('click', closeMenu);
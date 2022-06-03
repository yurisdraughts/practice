/*
Content
    Variables
    Adaptive design
    Mobile menu
*/

/* Variables */
const nav = document.querySelector('nav');

const navListLong = document.querySelector('.nav-list--long');

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

const mediaQuery = '(max-width: 768px)';
let mobileMenuOpen = false;

const gray = document.createElement('DIV');
(function() {
    let g = gray.style;

    g.position = 'fixed';
    g.top = '0';
    g.left = '0';
    g.width = '100%'
    g.height = '100%'
    g.zIndex = '1';
    g.backgroundColor = 'rgba(0,0,0,0.7)';
})();

function toSmallScreen() {
    menuBtn.classList.remove('hidden');
    navListLong.classList.add('mobile-menu');
}

function toLargeScreen() {
    if (mobileMenuOpen) closeMobileMenu();

    menuBtn.classList.add('hidden');
    navListLong.classList.remove('mobile-menu');
}

function adjustScreen() {
    if (window.matchMedia(mediaQuery).matches) {
        toSmallScreen();
    } else {
        toLargeScreen();
    }
}

function openMobileMenu() {
    navListLong.style.padding = '22px 20px 0 24px';
    navListLong.style.width = '64vw';

    nav.appendChild(gray);
    window.addEventListener('click', (event) => {
        if (event.target === gray) closeMobileMenu();
    });

    closeBtn.classList.remove('hidden');

    mobileMenuOpen = true;
}

function closeMobileMenu() {
    navListLong.style.width = '0';
    navListLong.style.padding = '0';

    closeBtn.classList.add('hidden');

    nav.removeChild(gray);

    mobileMenuOpen = false;
}

/* Adaptive design */
adjustScreen();

window.matchMedia(mediaQuery).addEventListener('change', () => {
    adjustScreen();
});

/* Mobile menu */
menuBtn.addEventListener('click', () => openMobileMenu());

closeBtn.addEventListener('click', () => closeMobileMenu());
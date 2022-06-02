/*
Content
    Variables
    Adaptive design
    Mobile menu
*/

/* Variables */
const nav = document.querySelector('nav');

const navListLong = document.querySelector('.nav-list--long');
const dropDownNavList = document.querySelectorAll('.dropdown-nav-list');
const arrowIcons = document.querySelectorAll('.dropdown-btn i.arrow');

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const dropDownBtn = document.querySelectorAll('.dropdown-btn');

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

/* Functions */
function hideAllDropdown(except) {
    dropDownNavList.forEach(list => {
        if (list !== except) {
            list.classList.add('hidden');
        }
    });
}

function arrowDown(except) {
    arrowIcons.forEach(i => {
        if (i !== except) {
            i.classList.remove('js-arrow-up')
        }
    });
}

function toSmallScreen() {
    menuBtn.classList.remove('hidden');
    navListLong.classList.add('mobile-menu');
    hideAllDropdown();
}

function toLargeScreen() {
    if (mobileMenuOpen) closeMobileMenu();

    menuBtn.classList.add('hidden');
    navListLong.classList.remove('mobile-menu');
    hideAllDropdown();
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

    hideAllDropdown();
    arrowDown();

    nav.removeChild(gray);

    mobileMenuOpen = false;
}


function addMobileDropdowns() {
    dropDownBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            arrowDown(arrowIcons[i]);
            hideAllDropdown(dropDownNavList[i]);

            dropDownNavList[i].classList.toggle('hidden');
            arrowIcons[i].classList.toggle('js-arrow-up')
        });
    });
}

/* Adaptive design */
adjustScreen();

window.matchMedia(mediaQuery).addEventListener('change', () => {
    adjustScreen();
    addMobileDropdowns();
});

/* Mobile menu */
menuBtn.addEventListener('click', () => openMobileMenu());

closeBtn.addEventListener('click', () => closeMobileMenu());
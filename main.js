const menuBtn = document.querySelector('.btnMenu');
const navMenu = document.querySelector('#nav');

menuBtn.addEventListener('click', openMenu);
navMenu.addEventListener('click', closeMenu);

function openMenu () {
    navMenu.classList.toggle('menu');
    
}

function closeMenu () {
    navMenu.classList.remove('menu');
}





const menuBtn = document.querySelector(".btnMenu");
const navMenu = document.querySelector(".menu");
const darkBackground = document.querySelector(".menuBackground");

menuBtn.addEventListener('click', openMenu);

function openMenu () {
   navMenu.classList.toggle("menu");
   menuBtn.classList.toggle("rotate");
}

function closeMenu () {
    navMenu.classList.remove('menu');
    
}





/*********************Variabel****************************/

const menuBtn = document.querySelector(".btnMenu");
const navMenu = document.querySelector("nav");
const darkBackground = document.querySelector(".menuBackground");
const rejectBtn = document.querySelector(".rejectBtn");
const acceptBtn = document.querySelector(".acceptBtn");
const continerFive = document.querySelector(".fifthContainer");
const menuBlack = document.querySelector(".lightBlack");



/*****************addEventListener***********************/

menuBtn.addEventListener("click", openMenuAndClose);
rejectBtn.addEventListener("click", closeCookie);
acceptBtn.addEventListener("click", closeCookie);


/*****************Function******************************/

function openMenuAndClose () {
   navMenu.classList.toggle("hidden");
   menuBtn.classList.toggle("rotate");
   menuBlack.classList.toggle("active");
}


function closeCookie () {
    continerFive.classList.toggle("hidden");

}








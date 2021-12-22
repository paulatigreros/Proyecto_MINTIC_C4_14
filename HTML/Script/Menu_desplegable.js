const btnMenu = document.querySelector('#menuBtn');
const header = document.querySelector('#headerPpal')
const menu = document.querySelector('#sideMenu');
btnMenu.addEventListener('click', event=>{
    header.classList.toggle("headerPpal-expanded");
    header.classList.toggle("headerPpal-collapsed");
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
});
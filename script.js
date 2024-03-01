const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const aside_nav = document.querySelector('.left-navbar');
const dark_mode = document.querySelector('.head-info .dark-mode');
const light = document.querySelector('.head-info .light');
const dark = document.querySelector('.head-info .dark');
const navbar_active = document.querySelectorAll('.nav ul li');

function active_link() {
    navbar_active.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}
navbar_active.forEach((item) => {
    item.addEventListener('click', active_link);
})


dark_mode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    dark.classList.toggle('active');
    light.classList.toggle('active');
})

menu.addEventListener('click', () => {
    aside_nav.style.left = '0px';


})
close.addEventListener('click', () => {
    aside_nav.style.left = '-200px';


})
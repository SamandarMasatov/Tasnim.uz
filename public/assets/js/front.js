// Burger
const burger = document.querySelector(".burger");
const navLink = document.querySelector(".nav_link");
const fullCover = document.querySelector(".full_cover");

burger.addEventListener('click', () => {
    navLink.classList.toggle('header_active')
    fullCover.classList.toggle('full_cover_active')
}) 

fullCover.addEventListener('click', () => {
    navLink.classList.remove('header_active')
    fullCover.classList.remove('full_cover_active')
})


// Drop down menu
const dropBtn = document.querySelector('.user_name_icon');
const dropDown = document.querySelector('.drop_down');

dropBtn.addEventListener('click', () => {
    dropDown.classList.toggle('drop_active')
})
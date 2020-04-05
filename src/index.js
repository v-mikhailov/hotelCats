import "./scss/style.scss";

const burgerDash = document.querySelector('.menu-bttn__dash')
const burgerBttn = document.querySelector('.menu-bttn');

burgerBttn.addEventListener('click', () => {
  burgerDash.classList.toggle('menu-bttn__dash_active');
})

console.log(`it's working!`);
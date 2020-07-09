import "./scss/style.scss";
import Flickity from 'flickity';

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const flkty = new Flickity( slider, {
    freeScroll: true,
    cellAlign: 'left',
    wrapAround: true,
    contain: true
  });
})

// тест кнопки
const burgerDash = document.querySelector('.menu-bttn__dash')
const burgerBttn = document.querySelector('.menu-bttn');
const sidebar = document.querySelector('.sidebar');

burgerBttn.addEventListener('click', () => {
  burgerDash.classList.toggle('menu-bttn__dash_active');
  sidebar.classList.toggle('sidebar_animated'); // клик по элементу меню должен закрывть сайдбар
})


// всплытие чекин попапа
const checkInBttns = document.querySelectorAll('.check-in-button-js');
const checkInFormBttn = document.querySelector('.check-in-button-form-js');

const checkInPopup = document.querySelector('.check-in-popup-js');
const popupSend = document.querySelector('.popup-send-js');

const closeIcon = document.querySelector('.close-icon-js');

checkInBttns.forEach(bttn => {
  bttn.addEventListener ('click', event => {
    event.preventDefault();
    checkInPopup.classList.add('check-in-popup_show');
  })
});

closeIcon.addEventListener('click', (event) => {
  checkInPopup.classList.remove('check-in-popup_show');
});

checkInFormBttn.addEventListener('click', (event) => {
  checkInPopup.classList.remove('check-in-popup_show');
  popupSend.classList.add('popup-send_show');
});

popupSend.addEventListener('click', (event) => {
  if(event.target.classList.contains('close-icon-js') || event.target.classList.contains('check-in-button-send-js')) {
    popupSend.classList.remove('popup-send_show');
  }
}) 


import './scss/catalog.scss';

const burgerDash = document.querySelector('.menu-bttn__dash')
const burgerBttn = document.querySelector('.menu-bttn');
const sidebar = document.querySelector('.sidebar');

burgerBttn.addEventListener('click', () => {
  burgerDash.classList.toggle('menu-bttn__dash_active');
  sidebar.classList.toggle('sidebar_animated'); // клик по элементу меню должен закрывть сайдбар
})

const checkInBttns = document.querySelectorAll('.check-in-button-js');
const checkInPopup = document.querySelector('.check-in-popup-js');
const popupSend = document.querySelector('.popup-send-js');

// всплытие фильтр-меню
const filterBttn = document.querySelector('.js-filter-bttn');
const filterMenu = document.querySelector('.filter-menu-js');


checkInBttns.forEach(bttn => {
  bttn.addEventListener ('click', event => {
    event.preventDefault();
    checkInPopup.classList.add('check-in-popup_show');
  })
})

checkInPopup.addEventListener('click', event => {
  if (event.target.classList.contains('close-icon-js')) {
    checkInPopup.classList.remove('check-in-popup_show');
  }
  if (event.target.classList.contains('check-in-button-form-js')) {
    checkInPopup.classList.remove('check-in-popup_show');
    popupSend.classList.add('popup-send_show');
  }
})

popupSend.addEventListener('click', event => {
  if (event.target.classList.contains('close-icon-js') || event.target.classList.contains('check-in-button-send-js')) {
    popupSend.classList.remove('popup-send_show');
  }
})

filterBttn.addEventListener('click', event => {
  filterMenu.classList.add('filter-menu_show');
});

filterMenu.addEventListener('click', event => {
  if (event.target.classList.contains('close-icon-js') || event.target.classList.contains('form-bttn-js')) {
    event.preventDefault();
    filterMenu.classList.remove('filter-menu_show');
  }
})


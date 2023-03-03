const loginButton= document.querySelector('.login__button')
const loginPopUp= document.querySelector('.popup__close')

function showPopup(evt) {
    evt.preventDefault();
    loginPopUp.classList.toggle('show__popup')
} 

loginButton.addEventListener('click', showPopUp)
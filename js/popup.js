const loginButton = document.querySelector('.login_button') ;
const loginPopUp = document.querySelector('.overlay');
const  closeButton = document.querySelector('.popup_close');

function showPopup() {
    loginPopUp.classList.add('show_popup');
} 

 function closePopup() {
    loginPopUp.classList.remove('show_popup');
 }

loginButton.addEventListener('click', showPopup);

closeButton.addEventListener( 'click', closePopup);

loginPopUp.addEventListener('cliсk' , (e) => {
        console.log(e.target);
        if (e.target.classList.contains('show_popup')) {
            closePopup();
        }
    })
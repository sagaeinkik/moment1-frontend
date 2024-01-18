'use strict';
// Hämta hamburgarknappen
const burgerButton = document.querySelector('.burger');
// Hämta själva mobilmenyn
const mobileMenu = document.querySelector('nav.mobile-menu');

//händelselyssnare på knapp
burgerButton.addEventListener('click', showMenu);
/* Funktion för att toggla menyn */
function showMenu() {
    //Lägg på/ta bort klasser vid klick
    burgerButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}
/* Stäng även meny vid klick utanför menyn */
//Lägg händelselyssnare på dokumentet
document.addEventListener('click', (e) => {
    //lagra mobilmeny-target och burger-target i variabel
    const clickInsideMenu = mobileMenu.contains(e.target);
    const clickOnBurger = burgerButton.contains(e.target);
    //Om de inte existerar, dvs man har inte klickat på dem, så stängs menyn
    if (!clickInsideMenu && !clickOnBurger) {
        burgerButton.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

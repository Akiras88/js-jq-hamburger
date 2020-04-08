/************************************
 * HAMBURGER MENU JQUERY
 * 
 * show / hide the hamburger menu
*************************************/

// variables

var hamburgerButton = $('a .fa-bars');
var hamburgerMenu = $('.hamburger-menu');
var closeButton = $('a .fa-times');

hamburgerButton.click(function () { 
    hamburgerMenu.show('slow');    
});

closeButton.click(function() {
    hamburgerMenu.hide('slow');
});
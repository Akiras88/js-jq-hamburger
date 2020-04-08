/************************************
 * HAMBURGER MENU JQUERY
 * 
 * show / hide the hamburger menu
*************************************/

// variables

var hamburgerButton = $('a .fa-bars');
var hamburgerMenu = $('.hamburger-menu');
var closeButton = $('a .fa-times');

hamburgerButton.click(showMenu);

closeButton.click(hideMenu);


// function show

function showMenu() {
    hamburgerMenu.show('slow'); 
}

// function hide

function hideMenu() {
    hamburgerMenu.hide('slow');
}
var menuButton = document.querySelector('.menu-icon')
var navBar = document.querySelector('#nav')
var closeAreas = document.querySelectorAll('.close')

function clickMenu() {
    navBar.classList.toggle('open')
}

function hideMenu() {
    navBar.classList.remove('open')
}

menuButton.addEventListener('click', clickMenu)

for (var item of closeAreas) {
    item.addEventListener('click', hideMenu)
}
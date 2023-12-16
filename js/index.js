let burger = document.querySelector('.header-burger')
let burgerMenu = document.querySelector('.header-menu')

burger.addEventListener('click', (e)=> {
    burgerMenu.classList.toggle('header-menu__active')
    e.currentTarget.classList.toggle('header-burger__active')
})
let logoHamburguesa = document.querySelector('.logo-hamburguesa')
let menuDesplegable = document.querySelector('.hamburguesa-header-nav--links')

logoHamburguesa.addEventListener('click', () => {
    menuDesplegable.classList.toggle('hamburguesa-activado')
})
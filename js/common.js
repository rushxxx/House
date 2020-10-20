// scroll to form

let footerButton = document.querySelector('.footer-button')
let form = document.querySelector('.callback-form')

const scrollToForm = (e) => {
	console.log(e)

}

footerButton.onclick = scrollToForm(footerButton.offsetTop)


// menu

let menuBurger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')

menuBurger.onclick = () => {
	menu.classList.toggle('active')
}
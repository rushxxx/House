// scroll to form

// let footerButton = document.querySelector('.footer-button')
// let form = document.querySelector('.callback-form')
//
// const scrollToForm = (e) => {
// 	console.log(e)
// }
// footerButton.onclick = scrollToForm(footerButton.offsetTop)


// menu

let menuBurger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')

menuBurger.onclick = () => {
	menu.classList.toggle('active')
}

// popup

let popupForm = document.querySelector('.popup-form-wrapper')
let popupFormShadow = document.querySelector('.popup-form-shadow')
let popupClose = document.querySelector('.popup-form-close')
let popupFormOpen = document.querySelectorAll('.popup-form-open')

for (let i = 0; i < popupFormOpen.length; i++) {
	popupFormOpen[i].onclick = () => {
		popupForm.classList.toggle('active')
		popupFormShadow.classList.toggle('active')
	}
}

popupClose.onclick = () => {
	popupForm.classList.remove('active')
	popupFormShadow.classList.remove('active')
}

// swiper slider

var mySwiper = new Swiper('.swiper-container', {
	speed: 400,
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 2,
		},
	}
});
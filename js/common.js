let footerButton = document.querySelector('.footer-button')
let form = document.querySelector('.callback-form')

const scrollToForm = (e) => {
	console.log(e)

}

footerButton.onclick = scrollToForm(footerButton.offsetTop)

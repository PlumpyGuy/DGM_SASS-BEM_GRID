const bugerBtn = document.querySelector('.hamburger')
const navMoblie = document.querySelector('.nav-mobile')
const allNavMoblieLinks = document.querySelectorAll('.nav-mobile .nav__link')
const footerYear = document.querySelector('.footer__year')

const showNav = () => {
    bugerBtn.classList.toggle('is-active')
    navMoblie.classList.toggle('nav-mobile--active')
}

const hideNav = () => {
    bugerBtn.classList.remove('is-active')
    navMoblie.classList.remove('nav-mobile--active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText += year;
};
handleCurrentYear()

allNavMoblieLinks.forEach(link => link.addEventListener('click',hideNav))
bugerBtn.addEventListener('click',showNav)
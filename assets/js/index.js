import InitialTheme from './settings.js';
import { isSafari } from './settings.js';

const $menuBurger = document.getElementById('burger-menu');
const $menu = document.getElementById('menu');
const $switch = document.getElementById('switch-theme');


const switchTheme = () => {
  document.getElementById('menu').classList.toggle('light');
  document.querySelector('body').classList.toggle('light');
}

$menuBurger.addEventListener('click', () => $menu.classList.toggle('active'));

// remove class active to menu by resize the viwport
window.addEventListener('resize', (e) => $menu.classList.remove('active'));


// switch between color theme
$switch.addEventListener('click', switchTheme)

// Lazyload
const lazy = (entries, observer) => {
  entries.forEach(entry => {
	if(entry.isIntersecting){
	  let url = entry.target.getAttribute('data-src');
	  url = isSafari ? url.replace('.webp', '.png') : url
	  entry.target.setAttribute('src', url);
	  observer.unobserve(entry.target);
	}
  })
}

const observer = new IntersectionObserver(lazy, {rootMargin: '20px 0px 0px 0px', threshold: 0});

document.querySelectorAll('img[loading="lazy"]').forEach(img => observer.observe(img));


document.addEventListener("DOMContentLoaded", InitialTheme );

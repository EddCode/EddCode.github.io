const $menuBurger = document.getElementById('burger-menu');
const $menu = document.getElementById('menu');

$menuBurger.addEventListener('click', () => $menu.classList.toggle('active'));

// remove class active to menu by resize the viwport
window.addEventListener('resize', (e) => $menu.classList.remove('active'));


// Lazyload
const lazy = (entries) => {
  entries.forEach(entry => {
	console.log(entry.isIntersecting)
	if(entry.isIntersecting){
	  const url = entry.target.getAttribute('data-src');
	  entry.target.setAttribute('src', url);
	}
  })
}

const observer = new IntersectionObserver(lazy, {rootMargin: '0px 0px 0px', threshold:1});

document.querySelectorAll('img[loading=lazy]').forEach(img => observer.observe(img));

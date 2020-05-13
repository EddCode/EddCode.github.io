function switchColorSchema(e) {
  if(e.matches){
    document.getElementById('menu').classList.remove('light');
	document.querySelector('body').classList.remove('light');
	document.querySelector('#switch-theme').checked = false
  }else{
	document.getElementById('menu').classList.add('light');
	document.querySelector('body').classList.add('light');
	document.querySelector('#switch-theme').checked = true;
  }

}

const setColorSchema = (matches) => {
  if(matches){
    document.getElementById('menu').classList.remove('light');
	document.querySelector('body').classList.remove('light');
	document.querySelector('#switch-theme').checked = false;
  }else{
	document.getElementById('menu').classList.add('light');
	document.querySelector('body').classList.add('light');
	document.querySelector('#switch-theme').checked = true;
  }

}

const setImageExt = () => {
  const $manComputing = document.getElementById('wrapper-img');
  let url = $manComputing.getAttribute('data-src');
  url = isSafari ? url.replace('.webp', '.png') : url;
  $manComputing.setAttribute('src', url);
}

const initColorSchema =  () => {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const colorSchema = window.matchMedia('(prefers-color-scheme: dark)');

  setImageExt();

  setColorSchema(userPrefersDark)
  colorSchema.addListener(switchColorSchema)
}

export default initColorSchema;
export const isSafari =  navigator.userAgent.indexOf("Safari") != -1

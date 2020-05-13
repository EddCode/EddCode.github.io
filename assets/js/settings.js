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

const initColorSchema =  () => {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const colorSchema = window.matchMedia('(prefers-color-scheme: dark)');

  setColorSchema(userPrefersDark)
  colorSchema.addListener(switchColorSchema)
}

export default initColorSchema;

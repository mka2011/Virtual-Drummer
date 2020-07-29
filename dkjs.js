
	function removeTransition(e){
		this.classList.remove('playing');
	}

	function addTransition(e){
		const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
		if(!audio) return;
		key.classList.add('playing');
		audio.currentTime = 0 ;
		audio.play();
	}

const keys=(document.querySelectorAll('.key'));
for(var i=0;i<keys.length;i++)
	keys[i].addEventListener("transitionend",removeTransition);
window.addEventListener("keydown",addTransition);

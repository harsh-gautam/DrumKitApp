document.body.addEventListener("keydown", function(e){
    let key = (e.key).toUpperCase();
    const keySelect = document.querySelector('.key-'+key);
    const audio = document.querySelector('.' + key);
    if(!audio) return; //stops if no element is selected
    keySelect.classList.add('playing');
    audio.currentTime = 0;
    audio.play();  
});

function removeTransition(e){
    //if(e.propertyName != 'transform') return;

    this.classList.remove('playing')
}

let keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


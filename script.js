document.body.addEventListener('keydown', (event)=>{
   
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click',() => {
    let song = document.querySelector('#input').value;
    if (song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
        
    };
});
    function playSound(sound){ 
        let audioElement = document.querySelector(`#s_${sound}`);
        let keyElement  = document.querySelector(`div[data-key= "${sound}"]`);

        if(audioElement){
            audioElement.currentTime = 0;
            audioElement.play();
        }

        if (keyElement){
            keyElement.classList.add('active');
            setTimeout(() =>{
                keyElement.classList.remove('active');
            },300);
        }
    }
    function playComposition(songArray){
        let wait = 0;

        for(let songItem of songArray){ 
            setTimeout(()=>{        //tempo de espera apos notas tocadas
                playSound(`key${songItem}`);
            }, wait);
             wait +=250;

        }
    }

    document.querySelectorAll('.key').forEach(element => {  //tocar notas no click também 
        element.addEventListener('click', () => {
            const clickedKey = element.getAttribute('data-key')
            playSound(clickedKey)
        })
    })
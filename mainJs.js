var audio1 = document.getElementById('audioPlayer1');  
var audio2 = document.getElementById('audioPlayer2');
var pianoButton=document.getElementById('play-piano');
var rainButton=document.getElementById('play-rain');
function toggleAudio1() {
    if(!audio2.paused){
        audio2.pause(); //turn off the music 2
        rainButton.textContent = 'Turn on rain sound'; 
        rainButton.classList.add('btn-success');
        rainButton.classList.remove('btn-secondary');
    }
    if (audio1.paused) {
        audio1.play(); 
        pianoButton.textContent = 'Turn off piano'; 
        pianoButton.classList.remove('btn-success');
        pianoButton.classList.add('btn-secondary');
        
    } else {
        audio1.pause(); 
        pianoButton.textContent = 'Turn on piano'; 
        pianoButton.classList.toggle('btn-success');
        pianoButton.classList.add('btn-secondary');
    }
}


function toggleAudio2() {
    
    if(!audio1.paused){
        audio1.pause();//turn off the music 1
        rainButton.textContent = 'Turn on rain sound'; 
        rainButton.classList.add('btn-success');
        rainButton.classList.remove('btn-secondary');
    }
    if (audio2.paused) {   
        //play rain sound
        audio2.play(); 
        rainButton.textContent = 'Turn off rain sound'; 
        rainButton.classList.remove('btn-success');
        rainButton.classList.add('btn-secondary');

        pianoButton.textContent = 'Turn on piano'; 
        pianoButton.classList.add('btn-success');
        pianoButton.classList.remove('btn-secondary');
    } else {
        audio2.pause(); 
        rainButton.textContent = 'Turn on rain sound'; 
        rainButton.classList.add('btn-success');
        rainButton.classList.remove('btn-secondary');
    }
}


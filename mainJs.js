var audio1 = document.getElementById('audioPlayer1');  
var audio2 = document.getElementById('audioPlayer2');
var pianoButton=document.getElementById('play-piano');
var rainButton=document.getElementById('play-rain');

function turnOffButton(button, text){
    button.textContent = text;
    button.classList.add('btn-success');
    button.classList.remove('btn-secondary');
}
function turnOnButton(button, text){   
    button.textContent = text;
    button.classList.remove('btn-success');
    button.classList.add('btn-secondary');
}
function toggleAudio1() {
    if(!audio2.paused){
        audio2.pause(); //turn off the music 2
        //change the status of button 2
        turnOffButton(rainButton, 'Turn on rain sound');
    }
    if (audio1.paused) {
        audio1.play(); 
        turnOnButton(pianoButton, 'Turn off piano');
    } else {
        audio1.pause(); 
        turnOffButton(pianoButton, 'Turn on piano');
    }
}

function toggleAudio2() {
    
    if(!audio1.paused){
        audio1.pause();//turn off the music 1
        turnOffButton(pianoButton, 'Turn on piano');
    }
    if (audio2.paused) {   
        //play rain sound
        audio2.play(); 
        turnOnButton(rainButton, 'Turn off rain sound');
        turnOffButton(pianoButton, 'Turn on piano');
    } else {
        audio2.pause(); 
        turnOffButton(rainButton, 'Turn on rain sound');
    }
}


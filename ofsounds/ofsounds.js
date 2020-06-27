const one = document.getElementById("kevpanting");
const two = document.getElementById("adub");
const three = document.getElementById("hurt");

// Play, Can add a Stop for other buttons

function playAudio() {
    one.play();
}
function playAudiotwo() {
    two.play();
}
function playAudiothree() {
    three.play();
}

// Pause
function pauseAudio() { 
    one.pause();
    two.pause();
    three.pause(); 
} 

// Stop
function stopAudio() { 
    one.pause();
    document.getElementById("kevpanting").currentTime = 0
    two.pause();
    document.getElementById("adub").currentTime = 0 
    three.pause();
    document.getElementById("adub").currentTime = 0  
  } 

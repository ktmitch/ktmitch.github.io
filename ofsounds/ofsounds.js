const one = document.getElementById("kevpanting"); // Kevin Panting
const two = document.getElementById("adub"); // Kevin singing A Dub
const three = document.getElementById("hurt"); // Minecraft Hurt
const four = document.getElementById("thanksgiving"); // DJ Singing
const five = document.getElementById("yeah"); // Bryan saying Yeah

let headingcolor = document.getElementById("title");
// Play, Can add a Stop for other buttons

function playAudio() {
    headingcolor.style.color = "#0099ff";
    one.play();
    console.log(document.getElementById("kevpanting").duration)
    lights();
}

function playAudiotwo() {
    headingcolor.style.color = "#0099ff";
    two.play();
}

function playAudiothree() {
    three.play();
    headingcolor.style.color = "#00cc99";
}

function playAudiofour() {
    four.play();
    headingcolor.style.color = "#f3aa21";
}

function playAudiofive() {
    five.play();
    headingcolor.style.color = "#c6d400";
}

// Pause
function pauseAudio() { 
    one.pause();
    two.pause();
    three.pause(); 
    four.pause(); 
    five.pause(); 
} 

// Stop
function stopAudio() { 
    one.pause();
    document.getElementById("kevpanting").currentTime = 0
    two.pause();
    document.getElementById("adub").currentTime = 0 
    three.pause();
    document.getElementById("hurt").currentTime = 0  
    four.pause();
    document.getElementById("thanksgiving").currentTime = 0
    five.pause();
    document.getElementById("yeah").currentTime = 0  
  } 

  function darkmode() {
    if (document.getElementById("darkmode").innerHTML = "Toggle Dark Mode") {
        document.bgColor = "black"
        document.getElementById("darkmode").innerHTML = "Toggle Light Mode"
    }
    else if (document.getElementById("darkmode").innerHTML = "Toggle Light Mode") {
      document.bgColor = "white";
      document.getElementById("darkmode").innerHTML = "Toggle Dark Mode"
    }
    else {
        document.bgColor = "white";
    }
  }

  function lights() {
        document.bgColor = "black"



  }
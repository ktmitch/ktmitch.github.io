// document.getElementById("bg").style.backgroundImage

const info = document.getElementsByTagName("h4")[0];
const about = document.getElementById("aboutinfo"); // Just used to showcase && in if statements
const overlay = document.getElementById("overlay");

const qtext = document.getElementById("quote");
const back = document.getElementById("bg");
const closeb = document.getElementById("close");
const d = new Date();

const copied = document.getElementById("ctrlclip");

let quotes = ['"Everything negative - pressure, challenges - is all an opportunity for me to rise."', 
'"Dedication sees dreams come true."', 
'"I have nothing in common with lazy people who blame others for their lack of success. Great things come from hard work and perseverance. No excuses."',
'"The most important thing is to try and inspire people so that they can be great at whatever they want to do."',
'"Once you know what failure feels like, determination chases success."',
'“I don’t want to be the next Michael Jordan, I only want to be Kobe Bryant.”',
'“Friends can come and go, but banners hang forever.”',
'“I realized that intimidation didn’t really exist if you’re in the right frame of mind.”',
'“The moment you give up, is the moment you let someone else win.”',
'“I’m chasing perfection.”',
'“The beauty in being blessed with talent is rising above doubters to create a beautiful moment.”',
'“But are you a different animal and the same beast?”',
'"Mamba Out"',
'"My parents are my backbone. Still are. They arere the only group that will support you if you score zero or you score 40."'];

let backgrounds = ['url(background/kobe1.png)', 
'url(background/kobe2.png)', 
'url(background/kobe3.png)', 
'url(background/kobe4.png)', 
'url(background/kobe5.png)', 
'url(background/kobe6.png)', 
'url(background/kobe7.png)', 
'url(background/kobe8.png)', 
'url(background/kobe9.png)', 
'url(background/kobe10.png)', 
'url(background/kobe11.png)', 
'url(background/kobe12.png)', 
'url(background/kobe13.png)', 
'url(background/kobe14.png)', 
'url(background/kobe15.png)', 
'url(background/kobe16.png)', 
'url(background/kobe17.png)',
'url(background/kobe18.png)',
'url(background/kobe19.png)',
'url(background/kobe20.png)',
'url(background/kobe21.png)',
'url(background/kobe22.png)']


    // Using 75 opacity https://www.peko-step.com/en/tool/alphachannel_en.html

function infoshow() {

    if (info.style.display == "block" && about.style.display == "block") {
        about.style.display = "none";
        info.style.display = "none";
        closeb.style.display = "none"; // If the information is already being shown, clicking info will close it
    }

    else {
        about.style.display = "block";
        info.style.display = "block";
        closeb.style.display = "block";
    }

} 

// Below function takes the lengths of the arrays of quotes and outputs a rounded number corresponding to a quote

function getquote() {
 
    let randomquotes = Math.floor(Math.random() * quotes.length);
    // let randomback = Math.floor(Math.random() * backgrounds.length);

    qtext.innerHTML = quotes[randomquotes];
    console.log(quotes[randomquotes])
    // back.style.backgroundImage = backgrounds[randomback];

    copied.innerText = "Copy to Clipboard"
    copied.style.backgroundColor = "blue"
}

// Special Days, Special Messages
function getSpecialdays() {
    if (d.getMonth() + 1 == 8 && d.getDate() == 23) {  /* Kobe Birthday */
        qtext.innerHTML = "Happy Birthday Kobe Bryant"
    }

    else if (d.getMonth() + 1 == 8 && d.getDate() == 24) { /* Kobe Bryant Day */
        qtext.innerHTML = "Happy Kobe Bryant Day"
    }

    else {
        console.log("Thanks for visiting!")
    }
}

// Copy Quote

function copyclip() {
    let forclip = qtext.textContent
    navigator.clipboard.writeText(forclip);
    copied.innerText = "Copied!";
    copied.style.backgroundColor = "#5A0607"; // Lower Merion (Kobe's High School Color)
    copied.style.transition = "1.0s";
}

copied.addEventListener('click', copyclip);

// Pause Background

function pausebg() {
    var backimg = document.querySelector('body')
    backimg.classList.toggle('paused')

}

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener('click', pausebg);

// Open Stats
var ref = document.querySelector("#reference");
var refButton = document.querySelector("#open-stats-button")
// refButton.innerText = " Less In-Depth Stats"
function openstats() {
    ref.classList.toggle("hidden");
    ref.classList.toggle("flex");
}

const detailedStats = document.querySelector("#open-stats-button")
detailedStats.addEventListener('click', openstats)


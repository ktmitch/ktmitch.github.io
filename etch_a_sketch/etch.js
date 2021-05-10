
var main = document.querySelector("#main")
const allDivs = document.querySelectorAll("div")

const newDiv = document.createElement('div')
let defaultColor = "on"

var i = 1

window.addEventListener('load', () => {
    create()
})

function create() {
    
    var finalInt = 16
    

    var btn = document.querySelector("#button-clear")

    document.documentElement.style.setProperty('--repeat', finalInt)

    for (i; i <= finalInt * finalInt; i++) {

        const newDiv = document.createElement('div')
        newDiv.classList.add("allDivs")
        var divStyle = newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0')


        newDiv.addEventListener('mouseenter', () => {
            var randColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')'
            // newDiv.style.backgroundColor = 'gray'
            newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0; background-color: ' + randColor)
        })

        main.appendChild(newDiv)
        console.log("Added")
        
        
        btn.addEventListener('click', () => {
            main.removeChild(newDiv) //Needs to be run only once to prevent error codes
        })
        
    }


    }




//////////////////////////////////////////////////

function clear() {


    var answer = prompt("How Many Squares Per Side?")
    var answerInt = parseInt(answer)
    console.log(answerInt)
    
    if (answerInt <= 50 && answerInt > 0) {

        var finalInt = answerInt * answerInt
        console.log(finalInt)


        var btn = document.querySelector("#button-clear")
        document.documentElement.style.setProperty('--repeat', answerInt)

        for (i = 1; i <= finalInt; i++) {

            const newDiv = document.createElement('div')
            newDiv.classList.add("allDivs")
            newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0') //overflow hidden if adding content

            newDiv.addEventListener('mouseenter', () => {
                var randColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')'
                // newDiv.style.backgroundColor = 'gray'
                newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0; background-color: ' + randColor)
        })

        main.appendChild(newDiv)
        console.log("Selection Valid")

        btn.addEventListener('click', () => {
            main.removeChild(newDiv)
        })

    }

    }
    else {
        alert("Error, please enter a number between 1 and 50")
    }
}

 
var btn = document.querySelector("#button-clear")
btn.addEventListener('click', clear)

var btnColor = document.querySelector("#button-randcolor")
btnColor.addEventListener('click', change)

function change() {
    let defaultColor = "off"
}
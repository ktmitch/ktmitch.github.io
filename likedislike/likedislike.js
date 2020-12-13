const disney = 7
const netflix = 14 //9 for Basic, 17 for Premium, updated 10/29/2020
const crunchyroll = 8 //10 for Mega Fan, 15 for Ultimate Fan
const primevid = 9 //Prime is 13 a month
const hbo = 15
const hulu = 6 // Premium is 12
const youtube = 12
const starz = 9
const showtime = 11

const services = {disney, netflix, crunchyroll, primevid, hbo, hulu, youtube, starz, showtime}


function calcPerMonth () {
    // document.getElementsByClassName("fa-thumbs-up");
    //Make it automatic as another version
    let permonth = disney + netflix;
    document.querySelector("#num").innerText = permonth;
    console.log(permonth);

}
//Idea 1: If Class name contains Youtube AND Thumbs up is selected currently, then add to Calc


function showWireframes () {
        document.querySelector("#wireframes").style.display = "flex";
        document.querySelector(".fa-angle-double-down").style.display = "none";
        document.querySelector(".fa-angle-double-up").style.display = "flex";
    }

function hideWireframes () {
    document.querySelector("#wireframes").style.display = "none";
    document.querySelector(".fa-angle-double-up").style.display = "none";
    document.querySelector(".fa-angle-double-down").style.display = "flex";
    console.log("else")
}

function darkMode () {
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), grey)";
    document.body.style.color = "white";
    document.querySelector("#calc").style.color = "white";
    document.querySelector("#calc").style.background = "green";
    console.log("Dark Mode Activated");
}

function lightMode () {
    document.body.style.backgroundImage = "linear-gradient(rgba(233, 33, 33, 0.5),orange, yellow)";
    document.body.style.color = "black";
    document.querySelector("#calc").style.color = "black";
    document.querySelector("#calc").style.background = "orange";
    console.log("Light Mode Activated");

}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode()
}
else {
    console.log("Light Mode")
}

// if #available(iOS 13.0, *) {
//     if UITraitCollection.current.userInterfaceStyle == .dark {
//         print("Dark mode")
//     }
//     else {
//         print("Light mode")
//     }
// }

// func viewDidLoad() {
//     super.viewDidLoad()

//     switch traitCollection.userInterfaceStyle {
//         case .light, .unspecified:
//             // light mode detected
//         case .dark:
//             // dark mode detected
//     }
// }
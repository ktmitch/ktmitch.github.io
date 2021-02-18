// *******************Destiny Start Game*******************

const queryForm = window.location.search; //Prints ? queries
const urlParams = new URLSearchParams(queryForm)

function getFullName() {
    const fullname = urlParams.get("fullname") 
    document.getElementById("welcome").innerText = "Welcome to the World of Destiny " + fullname + "!";
    if (fullname == null) {
        document.getElementById("welcome").innerText = "Welcome to the World of Destiny No Name!...Wait how did you get here?";
    }
}

function confirmInfo() {
    confirm("Are you sure you want to continue?\nThe path will be dangerous!")
}

// *******************User*******************

const charClass = urlParams.get("charclass") 

const user = {
    hp: 100,
    level: 1,
    attack : Math.floor(Math.random() * 10 * this.level), 
};


document.getElementById("mylevel").innerText = "Level: " + user.level;
document.getElementById("myhp").innerText = "HP: " + user.hp;

(charClass == "Warlock") ? user.super = "Radiance" :
(charClass == "Titan") ? user.super = "Ward of Dawn" :
(charClass == "Hunter") ? user.super = "Golden Gun" :
user.super = "Melee"

// *******************Battle*******************

function attack() {
    if (user.super == "Radiance") {
        if (user.hp <= 10) {
            user.hp = 100;
            console.log(user.hp);
            document.getElementById("myhp").innerText = "HP: " + user.hp;
        }
        else {
            user.hp += 25;
            console.log(user.hp);
            document.getElementById("myhp").innerText = "HP: " + user.hp;
        }
    }

    // else if (user.super == "Ward of Dawn") {

    // }
        
}

// ****************Super****************
function useSuper() {
    if (user.super == "Radiance") {
        if (user.hp <= 10) {
            user.hp = 100;
            console.log(user.hp);
            document.getElementById("myhp").innerText = "HP: " + user.hp;
        }
        else {
            user.hp += 25;
            console.log(user.hp);
            document.getElementById("myhp").innerText = "HP: " + user.hp;
        }
    }

    // else if (user.super == "Ward of Dawn") {

    // }
        
}

// ****************Start Battle and Get Monster Info****************
const startBattle = document.getElementById("startbattle")

function beginBattle() {

    if (thrall.hp > 1) {
        document.getElementById("enemylevel").innerText = "Level: " + thrall.level
        document.getElementById("enemyhp").innerText = "HP: " + thrall.hp
        startBattle.classList.toggle("hidden");
    }

    else if (splicers.hp > 1) {
        document.getElementById("enemylevel").innerText = "Level: " + splicers.level
        document.getElementById("enemyhp").innerText = "Level: " + splicers.hp
        startBattle.classList.toggle("hidden");
    }

    else {
        document.getElementById("enemylevel").innerText = "Level: N/A"
        document.getElementById("enemyhp").innerText = "Level: N/A"
        startBattle.classList.toggle("hidden");
    }
}

function getThrallInfo() {
    document.getElementById("enemylevel").innerText = "Level: " + thrall.level
    document.getElementById("enemyhp").innerText = "HP: " + thrall.hp
}

function getSplicersInfo() {
    document.getElementById("enemylevel").innerText = "Level: " + splicers.level
    document.getElementById("enemyhp").innerText = "Level: " + splicers.hp
}


// *******************Enemies*******************

const enemyName = document.getElementById("enemyname").innerText;
const enemyLevel = document.getElementById("enemylevel").innerText;
const enemyHp = document.getElementById("enemyhp").innerText;

const thrall = {
    name : "Thrall",
    hp: 20,
    level: 1,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward:  Math.floor(Math.random() * 100) + 2000
};

const splicers = {
    name : "Devil Splicers",
    hp : 40,
    level : 2,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward: Math.floor(Math.random() * 100) + 3500
};

const skolas = {
    name : "Skolas",
    hp : 60,
    level : 3,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward: Math.floor(Math.random() * 100) + 4750
};

const atheon = {
    name : "Atheon, King of Time",
    hp : 85,
    level : 5,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward: Math.floor(Math.random() * 100) + 5500
};

const crota = {
    name : "Prince Crota",
    hp : 100,
    level : 4,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward:  Math.floor(Math.random() * 100) + 5500
};

const oryx = {
    name : "King Oryx",
    hp : 120,
    level : 5,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward:  Math.floor(Math.random() * 100) + 10000
};

const echo = {
    name : "Echo King Oryx",
    hp : 120,
    level : 5,
    attack : Math.floor(Math.random() * 10 * this.level),
    reward:  Math.floor(Math.random() * 100) + 10000
};

function oryxheal () {
    oryx.hp = hp += 25;
    oryx.quote = "You think you can stop me guardian?"
}

var enemies = [];
enemies.push(thrall, splicers, skolas, atheon, crota, oryx, echo)



// *******************Shop*******************

document.querySelector("#shop").style.display = "none"
function openshop() {
    document.querySelector("#shop").style.display = "grid"
}

var shop = [ 
    {
        name: "Vestian",
        cost: 2000
    },

    {
        name: "Sleeper Simulant",
        cost: 7000
    },

    {
        name: "Black Spindle",
        cost: 7000
    }
]


// ***********Ideas***************
// If hunter input hunter symbol
// Alerts - Yes goes to next battle, No goes to Shop
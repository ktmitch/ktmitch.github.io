// *******************Destiny Start Game***********************

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

resetGame = () => {
    let reset = confirm("Are you sure you want to Reset the game? All progress will be lost!")
        if (reset == true) {
            location.reload()
}
}
// *************************************************************User****************************************************************

const charClass = urlParams.get("charclass") 

const user = {
    hp: 100,
    level: 1,
    glimmer: 0,
    weapon: "Khvostov 7G-02"
};


document.getElementById("user-level").innerText = "Level: " + user.level;
document.getElementById("user-hp").innerText = "HP: " + user.hp;

(charClass == "Warlock") ? user.super = "Radiance" :
(charClass == "Titan") ? user.super = "Ward of Dawn" :
(charClass == "Hunter") ? user.super = "Blade Dancer" : //Blade Dancer
user.super = "Melee"

if (user.super == "Radiance") {
    reviveCount = 1;
    document.getElementById("usesuper").classList.toggle("solar");
}

if (user.super == "Ward of Dawn") {
    document.getElementById("usesuper").classList.toggle("void");
}

if (user.super == "Blade Dancer") {
    document.getElementById("usesuper").classList.toggle("arc");
}

// ****************Super****************
function useSuper() {
    if (user.super == "Radiance") {
        if (user.hp <= 10) {
            user.hp = 35;
            console.log(user.hp);
            document.getElementById("user-hp").innerText = "HP: " + user.hp;
            document.getElementById("usesuper").setAttribute("disabled", "disabled")
            document.getElementById("user-name").classList.toggle("solar");
        }
        else {
            user.hp += 20;
            console.log(user.hp);
            document.getElementById("user-hp").innerText = "HP: " + user.hp;
            document.getElementById("usesuper").setAttribute("disabled", "disabled")
            document.getElementById("user-name").classList.toggle("solar");
        }
    }
    //Warlock Super can revive user or slightly heal user depending on health

    if (user.super == "Ward of Dawn") {
        user.hp += 75;
        document.getElementById("user-hp").classList.toggle("void");
        document.getElementById("usesuper").setAttribute("disabled", "disabled")
        document.getElementById("damage-taken").innerText = "Shielded for +75 HP!"
    }
    //Titan Super gives them a shield that gives them 75 health

    if (user.super == "Blade Dancer") {
        document.getElementById("user-level").classList.toggle("arc");
        document.getElementById("usesuper").setAttribute("disabled", "disabled")
        bladeAttack = Math.floor(Math.random() * 10 * user.level)
        document.getElementById("damage-done").innerText = bladeAttack + " damage to all!"
        for (i = 0; i < enemies.length - 1; i++) {
            if (enemies[i].status == "alive") {
                enemies[i].hp -= bladeAttack
                    console.log(bladeAttack)
            }
        }
    }
    //Hunter Super takes out the Hunter's blades to damage any enemy that is alive which is a random number multiplied by user level

}




// *********************************************************Enemies*********************************************************

const thrall = {
    name : "Thrall",
    hp: 20,
    level: 1,
    attack : Math.floor(Math.random() * 10 * 1), // Last number represents enemy level
    reward:  Math.floor(Math.random() * 100) + 2000,
    status: "alive"
};

const splicers = {
    name : "Devil Splicers",
    hp : 40,
    level : 2,
    attack : Math.floor(Math.random() * 10 * 2),
    reward: Math.floor(Math.random() * 100) + 3500,
    status: "alive"
};

const skolas = {
    name : "Skolas",
    hp : 120,
    level : 3,
    attack : Math.floor(Math.random() * 10 * 3),
    reward: Math.floor(Math.random() * 100) + 4750,
    status: "alive"
};

const atheon = {
    name : "Atheon, King of Time",
    hp : 185,
    level : 5,
    attack : Math.floor(Math.random() * 10 * 5),
    reward: Math.floor(Math.random() * 100) + 5500,
    status: "alive"
};

const crota = {
    name : "Prince Crota",
    hp : 220,
    level : 4,
    attack : Math.floor(Math.random() * 10 * 5),
    reward:  Math.floor(Math.random() * 100) + 5500,
    status: "alive"
};

const oryx = {
    name : "King Oryx",
    hp: 350,
    level: 5,
    attack: Math.floor(Math.random() * 10 * 5),
    reward:  Math.floor(Math.random() * 100) + 10000,
    status: "alive"
};

const echo = {
    name : "Echo King Oryx",
    hp : 350,
    level : 5,
    attack : Math.floor(Math.random() * 10 * 5),
    reward:  Math.floor(Math.random() * 100) + 10000,
    status: "alive"
};

// function oryxheal () {
//     oryx.hp += 25;
//     oryx.quote = "You think you can stop me guardian?"
// }

var enemies = [];
enemies.push(thrall, splicers, skolas, atheon, crota, oryx, echo)

// ***********************Initial Disabling**************************
document.getElementById("openshop").setAttribute("disabled", "disabled")
document.getElementById("next").setAttribute("disabled", "disabled")
document.getElementById("useattack").setAttribute("disabled", "disabled")
document.getElementById("usesuper").setAttribute("disabled", "disabled")


// ****************Get Monster Info****************

var nextEnemy

function getThrallInfo() {
    document.getElementById("enemylevel").innerText = "Level: " + thrall.level
    document.getElementById("enemyhp").innerText = "HP: " + thrall.hp
    
    startBattle.classList.toggle("hidden");
    nextEnemy = "Splicers" //Removed the var here so I can declare globally
}

function getSplicersInfo() {
    document.getElementById("enemyname").innerText = splicers.name
    document.getElementById("enemylevel").innerText = "Level: " + splicers.level
    document.getElementById("enemyhp").innerText = "HP: " + splicers.hp

    startBattle.classList.toggle("hidden");
    nextEnemy = "Skolas"
    user.level = 2
    user.hp = 120
}

function getSkolasInfo() {
    document.getElementById("enemyname").innerText = skolas.name
    document.getElementById("enemylevel").innerText = "Level: " + skolas.level
    document.getElementById("enemyhp").innerText = "HP: " + skolas.hp

    startBattle.classList.toggle("hidden");
    nextEnemy = "Atheon";
    user.level = 3;
    user.hp = 170;
}

function getAtheonInfo() {
    document.getElementById("enemyname").innerText = atheon.name
    document.getElementById("enemylevel").innerText = "Level: " + atheon.level
    document.getElementById("enemyhp").innerText = "HP: " + atheon.hp
    
    startBattle.classList.toggle("hidden");
    nextEnemy = "Crota";
    user.level = 4;
    user.hp = 220;
}

function getCrotaInfo() {
    document.getElementById("enemyname").innerText = crota.name
    document.getElementById("enemylevel").innerText = "Level: " + crota.level
    document.getElementById("enemyhp").innerText = "HP: " + crota.hp
    
    startBattle.classList.toggle("hidden");
    nextEnemy = "Oryx";
    user.level = 5;
    user.hp = 275;
}

function getOryxInfo() {
    document.getElementById("enemyname").innerText = oryx.name
    document.getElementById("enemylevel").innerText = "Level: " + oryx.level
    document.getElementById("enemyhp").innerText = "HP: " + oryx.hp
    
    startBattle.classList.toggle("hidden");
    nextEnemy = "Echo";
    user.level = 5;
    user.hp = 275;
}

function getEchoInfo() {
    document.getElementById("enemyname").innerText = echo.name
    document.getElementById("enemylevel").innerText = "Level: " + echo.level
    document.getElementById("enemyhp").innerText = "HP: " + echo.hp
    
    startBattle.classList.toggle("hidden");
    user.level = 5;
    user.hp = 275;
}

// ****************Start Battle******************
const startBattle = document.getElementById("startbattle")

function beginBattle() {

    document.getElementById("openshop").setAttribute("disabled", "disabled")
    document.querySelector("#shop").style.display = "none"; //Always closes shop before battle and locks it
    document.getElementById("user-hp").classList.remove("void");
    document.getElementById("user-name").classList.remove("solar");
    document.getElementById("user-level").classList.remove("arc"); //Takes off Styling of Supers


    document.getElementById("usesuper").removeAttribute("disabled", "disabled")
    document.getElementById("useattack").removeAttribute("disabled", "disabled") //User now able to attack and use super again

    document.getElementById("user-hp").style.color = "black";
    document.getElementById("enemyhp").style.color = "black";

    if (thrall.hp >= 1) {
        getThrallInfo();
    }

    else if (thrall.hp < 1 && splicers.hp >= 1) {
        getSplicersInfo();
    }

    else if (splicers.hp < 1 && skolas.hp >= 1) {
        getSkolasInfo();
    }

    else if (skolas.hp < 1 && atheon.hp >= 1) {
        getAtheonInfo();
    }

    else if (atheon.hp < 1 && crota.hp >= 1) {
        getCrotaInfo();
    }

    else if (crota.hp < 1 && oryx.hp >= 1) {
        getOryxInfo();
    }

    else if (oryx.hp < 1 && echo.hp >= 1) {
        getEchoInfo();
    }

    else {
        document.getElementById("enemylevel").innerText = "Level: N/A"
        document.getElementById("enemyhp").innerText = "Level: N/A"
        startBattle.classList.toggle("hidden");
    }

    document.getElementById("user-level").innerText = "Level: " + user.level; //Updates User Level on Screen
    document.getElementById("user-hp").innerText = "HP: " + user.hp; //Updates user HP on screen before fight
}



// *******************Battle*******************

function afterBattle() {
    document.getElementById("next").removeAttribute("disabled", "disabled")
    document.getElementById("openshop").removeAttribute("disabled", "disabled")

    document.getElementById("usesuper").setAttribute("disabled", "disabled")
    document.getElementById("useattack").setAttribute("disabled", "disabled")

    document.getElementById("welcome").innerText = "Glimmer: " + user.glimmer;
    document.getElementById("enemyhp").style.color = "#84262f";
}

function attack() {
    let enemyName = document.getElementById("enemyname").innerText;
    let enemyLevel = document.getElementById("enemylevel").innerText;
    let enemyHp = document.getElementById("enemyhp").innerText;

    var userAttackPower = Math.floor(Math.random() * 10 * user.level);
    var enemyAttackPower = Math.floor(Math.random() * 10 * 1);

    //*****************Game Over*****************

    if (user.hp <= 1) {

        if (user.super == "Radiance" && reviveCount == 1) { //If the user is Warlock, they can come back to life one time using their super
            var revive = confirm("You lost :(...But you can come back to life through Radiance. One Time Use Only, would you like to ressurect?")

            if (revive == true) {
                user.hp = 100;
                reviveCount = 0
                alert("Let's Go! Fight Guardian!");
            }

            else {
                alert("You lost :(. Press Reset or the back button to start the adventure over")
                document.getElementById("next").setAttribute("disabled", "disabled")
                document.getElementById("usesuper").setAttribute("disabled", "disabled")
                document.getElementById("useattack").setAttribute("disabled", "disabled")

                document.getElementById("user-hp").style.color = "#84262f";
            }

        }

        else {
            alert("You lost :(. Press Reset or the back button to start the adventure over")
            document.getElementById("next").setAttribute("disabled", "disabled")
            document.getElementById("usesuper").setAttribute("disabled", "disabled")
            document.getElementById("useattack").setAttribute("disabled", "disabled")
        }
    }

    //****Thrall Fight****
    else if (thrall.hp >= 1) {

        thrall.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + thrall.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= enemyAttackPower
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

            if (thrall.hp < 1) {
                alert("Thrall is dead. Press Next Enemy")

                thrall.status = "dead"
                user.glimmer += thrall.reward
                afterBattle()
            }
        }
        
        //****Splicers Fight****
    else if (thrall.status == "dead" && splicers.hp >= 1) { //After Thralls Die, Splicers appear with their information and picture. This repeats for all enemies
        
        splicers.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + splicers.hp
        console.log("You did " + userAttackPower + " damage!")
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * splicers.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * splicers.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

            if (splicers.hp < 1) {
                alert("Splicers are dead. Press Next Enemy")

                splicers.status = "dead"
                user.glimmer += splicers.reward                
                afterBattle()
        }
    }

        //****Skolas Fight****
    else if (splicers.status == "dead" && skolas.hp >= 1) { 

        skolas.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + skolas.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * skolas.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * skolas.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

            if (skolas.hp < 1) {
                alert("Skolas is dead. Press Next Enemy")

                skolas.status = "dead"
                user.glimmer += skolas.reward
                afterBattle()
        }
        }

        //****Atheon Fight****
    else if (skolas.status == "dead" && atheon.hp >= 1) { 

        atheon.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + atheon.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * atheon.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * atheon.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

        if (atheon.hp < 1) {
            alert("The King of Time, Atheon, is dead! Press Next Enemy")

            atheon.status = "dead"
            user.glimmer += atheon.reward
            afterBattle()
        }
        }

        //****Crota Fight****
    else if (atheon.status == "dead" && crota.hp >= 1) { 

        crota.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + crota.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * crota.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * crota.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

        if (crota.hp < 1) {
            alert("Prince Crota is dead! Oh no, Oryx heard his son is dead! Press Next Enemy")

            crota.status = "dead"
            user.glimmer += crota.reward
            afterBattle()
        }
        }

        //****Oryx Fight****
    else if (crota.status == "dead" && oryx.hp >= 1) { 

        oryx.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + oryx.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * oryx.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * oryx.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

        if (oryx.hp < 1) {
            alert("KING ORYX is dea-WAIT HOLD ON?!?! Press Next Enemy")

            oryx.status = "dead"
            user.glimmer += oryx.reward
            afterBattle()
        }
        }

        //****Echo Fight****
    else if (oryx.status == "dead" && echo.hp >= 1) { 

        echo.hp -= userAttackPower
        document.getElementById("enemyhp").innerText = "HP: " + echo.hp
        document.getElementById("damage-done").innerText = "You did " + userAttackPower + " damage!"

        if (userAttackPower == 0) {
            document.getElementById("damage-done").innerText = "You missed!"
        }

        user.hp -= (enemyAttackPower * echo.level)
        document.getElementById("user-hp").innerText = "HP: " + user.hp
        document.getElementById("damage-taken").innerText = enemyName + " did " + enemyAttackPower * echo.level + " damage!"

        if (enemyAttackPower == 0) {
            document.getElementById("damage-taken").innerText = "Good Dodge"
        }

        if (echo.hp < 1) {
            alert("ORYX IS OFFICIALLY GONE! YOU SAVED THE WORLD!!")
            
            echo.status = "dead"
            user.glimmer += echo.reward
            afterBattle()
            document.getElementById("next").setAttribute("disabled", "disabled")
        }
        }

    else {
        console.log("No Enemies Detected")
    }
    
}



// ***********************Switch Enemy**************************

function changeEnemy() {

    switch (nextEnemy) {
        case "Splicers":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='splicers.jpg' alt='Splicers'>";
            break;
        
        case "Skolas":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='skolas.jpg' alt='Skolas'>";
            break;

        case "Atheon":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='atheon.jpg' alt='Atheon'>";
            break;
        
        case "Crota":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='crota.jpg' alt='Crota'>";
            break;

        case "Oryx":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='oryx.jpg' alt='Oryx'>";
            break;

        case "Echo":
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='oryxecho.jpg' alt='Echo Oryx'>";
            break;
        
        default:
            document.getElementsByClassName("enemyimage")[0].innerHTML = "<img src='thrall.jpg' alt='Thrall'>"
            console.log("Not working")
    }

    startBattle.classList.toggle("hidden");

    // Switch cases (currently stops on Spilicers)
}

// *******************Shop*******************

document.querySelector("#shop").style.display = "none"
function openshop() {
    document.querySelector("#shop").style.display = "grid"
    document.getElementById("welcome").innerText = "Glimmer: " + user.glimmer;
    window.alert("Browse the shop! Full functionality being released in Update 1.5!")
}

// var Vestian =
//     {
//         name: "Vestian",
//         cost: 2000
//     },

//      
//     {
//         name: "Sleeper Simulant",
//         cost: 7000
//     },

//      
//     {
//         name: "Black Spindle",
//         cost: 7000
//     },


//     {
//         name: "Touch of Malice",
//         cost: 7000
//     },

//     {
//         name: "Telesto",
//         cost: 8000
//     },

//     {
//         name: "Tlaloc",
//         cost: 9000
//     },

//     {
//         name: "Dark Drinker",
//         cost: 7000
//     },

//     {
//         name: "Razer Lighter",
//         cost: 7000
//     },

//     {
//         name: "Gjallohorn",
//         cost: 10000
//     },
// ]


// ***********Ideas***************
// Clean up naming
// Styling for Weapons
// If hunter input hunter symbol
// enemies[0].name is the Thrall. enemies[i] for i=0, i++. If statement before 
// Add Weapons of Light and Blessing of Light to the button   
        
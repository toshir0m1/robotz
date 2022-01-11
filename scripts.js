let Robotz = {
    robots: {},
    Robot: function(robotType, name) {
        let r = JSON.parse(JSON.stringify(Robotz.robots[robotType]));
        for (weapon of r.weapons) {
            r.weapons[weapon] = new Robotz.Weapon(weapon);
        }
        r["status"] = r.structure;
        r["type"] = robotType;
        r["name"] = name;
        return r;
    },
    weapons: {},
    Weapon: function(weaponType) {
        return Robotz.weapons[weaponType];
    },
};
 
function INIT(e) {
    const buttons = ["newGame", "howToPlay", "options", "about"];
    for (const b of buttons) {
        document.getElementById("b_" + b).addEventListener("click", window["click_" + b], false);
    }

    loadRobotzData("weapons");
    loadRobotzData("robots");
}

function loadRobotzData(filename) {
    fetch("./data/" + filename + ".json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        Robotz[filename] = data;
    })
    .catch(function (err) {
        console.log(err);
    });
}

function click_newGame(e) {
    document.getElementById("gameSettingsScreen").classList.remove("d-none");
    document.getElementById("mainMenu").classList.add("d-none");
}

function click_howToPlay(e) {
    //
}

function click_options(e) {
    //
}

function click_about(e) {
    //
}

window.addEventListener("load", INIT, false);
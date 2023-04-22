classes = {
    1: "Warrior",
    2: "Paladin",
    3: "Hunter",
    4: "Rogue",
    5: "Priest",
    6: "Shaman",
    7: "Mage",
    8: "Warlock",
    9: "Druid"
}

races = {
    1: {"name": "Human", "classes": [1, 2, 4, 7, 8]},
    2: {"name": "Dwarf", "classes": [1, 2, 3, 4, 5]},
    3: {"name": "Night Elf", "classes": [1, 3, 4, 5, 9]},
    4: {"name": "Gnome", "classes": [1, 4, 7, 8]},
    5: {"name": "Orc", "classes": [1, 3, 4, 6, 8]},
    6: {"name": "Undead", "classes": [1, 4, 5, 7, 8]},
    7: {"name": "Troll", "classes": [1, 3, 4, 5, 6, 7]},
    8: {"name": "Tauren", "classes": [1, 3, 6, 9]}
}

genders = ["Male", "Female"];

factions = ["Alliance", "Horde"];


selectMode = document.querySelector("#selectMode");
selectFaction = document.querySelector("#selectFaction");
selectRace = document.querySelector("#selectRace");
selectGender = document.querySelector("#selectGender");
selectClass = document.querySelector("#selectClass");
generateButton = document.querySelector("#generateButton");
resultContainer = document.querySelector(".resultContainer");

//selectClass.remove(0)


selectMode.addEventListener("change", (e) => {
    let value = selectMode.value;
    // if single: show character panel with excludes
    // if duo: show 2 characters panel, with excludes, make sure excludes don't override base selections
    // if trio: same as duo, but 3
})



selectFaction.addEventListener("change", (e) => {
    let value = selectFaction.value
    if (value == "Random") {
        // TODO: fill Races with all
    }
    else if (value == "Alliance") {
        // TODO: fill Races with Alliance
    }
    else {
        // TODO: fill Races with Horde
    }
    
})


generateButton.addEventListener("click", generateCharacter)



function generateCharacter() {
    let chFaction = randomNumBetween(0, 1);
    let chRace = randomNumBetween(1, 4);
    if (chFaction == 1) chRace += 4;
    let chGender = randomNumBetween(0, 1);
    let classesLength = races[chRace].classes.length;
    let chClass = randomNumBetween(0, classesLength-1);
    let chString = races[chRace].name + " " +genders[chGender] + " " + classes[races[chRace].classes[chClass]];
    resultContainer.textContent = chString;
}


function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
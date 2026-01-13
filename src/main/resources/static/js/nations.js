
async function loadNations() {
    const nations = [
        "ar", "be", "br", "ch", "ci", "de", "dz", "ee", "eg",
        "es", "fr", "gb-eng", "gb-sct", "gh", "jp",
        "nl", "no", "pt", "ua", "us"
    ];

    const nationsContainer = document.getElementById("nations_container");
    nationsContainer.innerHTML = '';

    try {
        nations.forEach(function (nation) {
            const nationDiv = document.createElement('div');
            nationDiv.className = "nation_card";

            const nationFlag = document.createElement("img");
            nationFlag.src = "assets/nations/" + nation + ".svg";
            nationFlag.alt = "The flag of a country";
            nationFlag.className = "nation_flag_img";
            //nationFlag.addEventListener("click", () => displayNationPlayers(nation));

            nationDiv.appendChild(nationFlag);
            nationsContainer.appendChild(nationDiv);

        });
    }
    catch(error) {
        console.error("There was an error" + error);
    }
}
loadNations()

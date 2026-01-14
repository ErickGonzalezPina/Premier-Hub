
async function loadNations() {

    const nationsContainer = document.getElementById("nations_container");
    nationsContainer.innerHTML = '';

    try {
        const response = await fetch("api/v1/player/nations");
        const nations  = await response.json();
        console.log(nations)

        nations.forEach(function (nation) {
            if (!nation || typeof nation !== "string") return;
            const nationCode = nation.split(' ')[0]
            console.log(nationCode);

            const nationDiv = document.createElement('div');
            nationDiv.className = "nation_card";

            const nationFlag = document.createElement("img");
            nationFlag.src = "assets/nations/" + nationCode + ".svg";
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

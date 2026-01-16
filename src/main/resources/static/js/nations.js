import renderPlayersTable from "./helpers/playersTable.js";
import renderNav from "./helpers/navContent.js";

async function loadNations() {
    /**
     * Fetches the list of nation names from the backend API and dynamically
     * renders each nation's flag in the nations grid.
     * and clears the container before rendering.
    */
    const nationsContainer = document.getElementById("nations_container");
    nationsContainer.innerHTML = '';

    try {
        const response = await fetch("api/v1/player/nations");
        const nations  = await response.json();
        //console.log(nations)

        nations.forEach(function (nation) {
            if (!nation || typeof nation !== "string") return;
            const nationCode = nation.split(' ')[0]
            //console.log(nationCode);

            const nationDiv = document.createElement('div');
            nationDiv.className = "nation_card";

            const nationFlag = document.createElement("img");
            nationFlag.src = "assets/nations/" + nationCode + ".svg";
            nationFlag.alt = "The flag of a country";
            nationFlag.className = "nation_flag_img";
            nationFlag.addEventListener("click", () => displayNationPlayers(nation));

            nationDiv.appendChild(nationFlag);
            nationsContainer.appendChild(nationDiv);
        });
    }
    catch(error) {
        console.error("There was an error" + error);
    }
}
loadNations()


function loadNavbar() {
    const navbar = document.getElementById("navbar");
    renderNav(navbar);
}
loadNavbar();


async function displayNationPlayers(nation) {
    /**
     * Fetches and displays all players for the given nation.
     * Hides the nations container, displays the players container, and populates it
     * With a table containing players information fetched from the backend API for the given nation.
     */
    const nationsContainer = document.getElementById("nations_container");
    const playersContainer = document.getElementById("players_container");

    nationsContainer.style.display = "none";
    playersContainer.innerHTML = "";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`api/v1/player?nation=${encodeURIComponent(nation)}`);
        console.log(response);
        const players = await response.json();

        // Render players table
        renderPlayersTable(players, playersContainer);
    }
    catch (error) {
        console.error("There is an error" + error);
    }

}

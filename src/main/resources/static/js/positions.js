import renderPlayersTable from './helpers/playersTable.js';
import renderNav from "./helpers/navContent.js";

async function loadPositions() {
    /**
     * Renders the available positions and their images in the positions grid.
    */
    const positions = [
        { name: "Defender", img: "assets/positions/Defender.avif", pos: "DF" },
        { name: "Forward", img: "assets/positions/Forward.jpeg", pos: "FW" },
        { name: "Goalie", img: "assets/positions/Goalie.jpeg", pos: "GK" },
        { name: "Midfielder", img: "assets/positions/Midfielder.jpeg", pos: "MF" }
    ];
    const positionsContainer = document.getElementById("positions_container");
    positionsContainer.innerHTML = '';

    positions.forEach(function (position) {
        const positionDiv = document.createElement('div');
        positionDiv.className = "position_card";
        positionDiv.addEventListener("click", () => loadPositionPlayers(position.pos));

        const img = document.createElement('img');
        img.src = position.img;
        img.alt = position.name;
        img.className = "position_img";

        const label = document.createElement('div');
        label.className = "position_label";
        label.innerText = position.name;

        positionDiv.appendChild(img);
        positionDiv.appendChild(label);
        positionsContainer.appendChild(positionDiv);
    });
}
loadPositions();

async function loadNavbar() {
    const navbar = document.getElementById("navbar");
    renderNav(navbar);
}
loadNavbar();

async function loadPositionPlayers(position) {
    /**
     * Fetches and displays all players for the given team.
     * Hides the teams container, displays the players container, and populates it
     * with a table containing player information fetched from the backend API for the given team.
     **/
    const playersContainer = document.getElementById("players_container");
    const positionsContainer = document.getElementById("positions_container");

    positionsContainer.style.display = "none";
    playersContainer.innerHTML = "";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`/api/v1/player?position=${encodeURIComponent(position)}`);
        if (!response.ok) {console.log("Network response was not ok while fetching players for team");}
        const players = await response.json();

        // Render players table
        renderPlayersTable(players, playersContainer);
    }
    catch(error) {
        console.error("Error fetching players:", error)
    }
}
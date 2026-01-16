import renderPlayersTable from './helpers/playersTable.js';
import renderNav from "./helpers/navContent.js";

async function loadPositions() {
    /**
     * Renders the available positions and their images in the positions grid.
    */
    const positions = [
        { name: "Defender", img: "assets/positions/Defender.avif" },
        { name: "Forward", img: "assets/positions/Forward.jpeg" },
        { name: "Goalie", img: "assets/positions/Goalie.jpeg" },
        { name: "Midfielder", img: "assets/positions/Midfielder.jpeg" }
    ];
    const positionsContainer = document.getElementById("positions_container");
    positionsContainer.innerHTML = '';

    positions.forEach(function (position) {
        const positionDiv = document.createElement('div');
        positionDiv.className = "position_card";

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
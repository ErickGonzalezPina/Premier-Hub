import renderPlayersTable from "./helpers/playersTable.js";

async function loadTeams() {
    /**
     * Fetches the list of team names from the backend API and dynamically
     * renders each team's flag in the teams grid.
     * and clears the container before rendering.
    */
    const teamsContainer = document.getElementById('teams_container');
    teamsContainer.innerHTML = '';

    try {
        const response = await fetch('/api/v1/player/teams');
        if (!response.ok) {console.log("Network response was not ok while fetching teams");}
        const teamNames = await response.json();

        teamNames.forEach(function(team) {
            const teamDiv = document.createElement("div");
            teamDiv.className = "team_card";

            const teamFlag = document.createElement("img");
            teamFlag.src = "assets/teams/" + team + ".png";
            teamFlag.alt = team + " flag";
            teamFlag.className = "team_flag_img";
            teamFlag.addEventListener("click", () => loadTeamPlayers(team));

            teamDiv.appendChild(teamFlag);
            teamsContainer.appendChild(teamDiv);
        });
    }
    catch (error) {
        console.error("Error fetching teams:", error);
    }
}
loadTeams();


async function loadTeamPlayers(team) {
    /**
     * Fetches and displays all players for the given team.
     * Hides the teams container, displays the players container, and populates it
     * with a table containing player information fetched from the backend API for the given team.
    */
    const playersContainer = document.getElementById("players_container");
    const teamsContainer = document.getElementById("teams_container");

    teamsContainer.style.display = "none";
    playersContainer.innerHTML = "";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`/api/v1/player?team=${encodeURIComponent(team)}`);
        if (!response.ok) {console.log("Network response was not ok while fetching players for team");}
        const players = await response.json();

        // Render players table
        renderPlayersTable(players, playersContainer);
    }
    catch(error) {
        console.error("Error fetching players:", error)
    }
}
















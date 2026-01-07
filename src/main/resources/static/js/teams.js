

async function loadTeams() {
    /**
     * Fetches the list of team names from the backend API and dynamically
     * renders each team's logo in the teams grid. Handles errors gracefully
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

            const teamLogo = document.createElement("img");
            teamLogo.src = "assets/teams/" + team + ".png";
            teamLogo.alt = team + " Logo";
            teamLogo.className = "team_logo_img";
            teamLogo.addEventListener("click", () => loadTeamPlayers(team));

            teamDiv.appendChild(teamLogo);
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
     * Hides the teams container, shows the players container, and populates it
     * with player information fetched from the backend API for the given team.
    */
    
    const playersContainer = document.getElementById("players_container");
    const teamsContainer = document.getElementById("teams_container");

    teamsContainer.style.display = "none";
    playersContainer.innerHTML = " ";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`/api/v1/player?team=${encodeURIComponent(team)}`);
        if (!response.ok) {console.log("Network response was not ok while fetching players for team");}
        const players = await response.json();

        players.forEach(function(player) {
            const playerInfo = document.createElement("p");
            playerInfo.innerText = JSON.stringify(player);
            playersContainer.appendChild(playerInfo);
        });
    }
    catch(error) {
        console.error("Error fetching players:", error)
    }
}
















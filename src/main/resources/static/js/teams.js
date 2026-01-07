

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

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const teamNames = await response.json();

        teamNames.forEach(function(team) {
        const teamDiv = document.createElement("div");
        teamDiv.className = "team_card";

        const teamLogo = document.createElement("img");
        teamLogo.src = "assets/teams/" + team + ".png";
        teamLogo.alt = team + " Logo";
        teamLogo.className = "team_logo_img";
        
        teamDiv.appendChild(teamLogo);
        teamsContainer.appendChild(teamDiv);
    });
    } catch (error) {
        console.error("Error fetching teams:", error);
    }
}
loadTeams();
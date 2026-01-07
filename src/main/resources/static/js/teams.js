

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
    playersContainer.innerHTML = "";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`/api/v1/player?team=${encodeURIComponent(team)}`);
        if (!response.ok) {console.log("Network response was not ok while fetching players for team");}
        const players = await response.json();

        console.log(players);

        // Define the columns you want to display
        const columns = [
            { key: "name", label: "Name" },
            { key: "nation", label: "Nation" },
            { key: "team", label: "Team" },
            { key: "pos", label: "Position" },
            { key: "age", label: "Age" },
            { key: "mp", label: "Matches Played" },
            { key: "starts", label: "Starts" },
            { key: "min", label: "Minutes Played" },
            { key: "gls", label: "Goals" },
            { key: "ast", label: "Assists" },
            { key: "pk", label: "Penalties Scored" },
            { key: "crdy", label: "Yellow Cards" },
            { key: "crdr", label: "Red Cards" },
            { key: "xg", label: "Expected Goals" },
            { key: "xag", label: "Expected Assists" }
        ];

        // Create table
        const table = document.createElement("table");
        table.className = "players_table";

        // Table header
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        columns.forEach(col => {
            const th = document.createElement("th");
            th.innerText = col.label;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Table body
        const tbody = document.createElement("tbody");
        players.forEach(player => {
            const row = document.createElement("tr");
            columns.forEach(col => {
                const td = document.createElement("td");
                td.innerText = player[col.key] !== null ? player[col.key] : "N/A";
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Wrap table in a responsive container
        const tableWrapper = document.createElement("div");
        tableWrapper.className = "table-responsive";
        tableWrapper.appendChild(table);
        playersContainer.appendChild(tableWrapper);
    }
    catch(error) {
        console.error("Error fetching players:", error)
    }
}
















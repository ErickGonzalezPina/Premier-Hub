function loadTeams() {
    var teamsContainer = document.getElementById('teams_container');
    teamsContainer.innerHTML = '';

    const teamNames = [
        "Bournemouth",
        "Everton",
        "Crystal-Palace",
        "Manchester-City",
        "Nottingham-Forest",
        "Wolverhampton-Wanderers",
        "Manchester-United",
        "Fulham",
        "Brentford",
        "Aston-Villa",
        "Liverpool",
        "Newcastle-United",
        "Leicester-City",
        "Arsenal",
        "Leeds-United",
        "Brighton-and-Hove-Albion",
        "Southampton",
        "West-Ham-United",
        "Tottenham-Hotspur",
        "Chelsea"
    ];

    teamNames.forEach(function(team) {
        var teamDiv = document.createElement("div");
        teamDiv.className = "team_card";

        var teamLogo = document.createElement("img");
        teamLogo.src = "assets/teams/" + team + ".png";
        teamLogo.alt = team + " Logo";
        teamLogo.className = "team_logo_img";
        
        teamDiv.appendChild(teamLogo);
        teamsContainer.appendChild(teamDiv);
    });
}

loadTeams();

async function loadNations() {

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

async function displayNationPlayers(nation) {
    const nationsContainer = document.getElementById("nations_container");
    const playersContainer = document.getElementById("players_container");

    nationsContainer.style.display = "none";
    playersContainer.innerHTML = "";
    playersContainer.style.display = "block";

    try {
        const response = await fetch(`api/v1/player?nation=${encodeURIComponent(nation)}`);
        console.log(response);
        const players = await response.json();
        // console.log(players)

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
    catch (error) {
        console.error("There is an error" + error);
    }

}

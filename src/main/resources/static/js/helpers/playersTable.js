export default renderPlayersTable


function renderPlayersTable(players, container) {
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

    const table = document.createElement("table");
    table.className = "players_table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    columns.forEach(col => {
        const th = document.createElement("th");
        th.innerText = col.label;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

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

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-responsive";
    tableWrapper.appendChild(table);
    container.appendChild(tableWrapper);
}
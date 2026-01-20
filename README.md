# Premier Hub

A modern web application for exploring Premier League football stats, built with Java Spring Boot (backend) and JavaScript/CSS (frontend).

## Features
- Browse player stats by team, nation, or position
- Dynamic, responsive UI with modular ES6 JavaScript
- RESTful API backend using Spring Boot and JPA (ORM)
- Search bar for quick team lookup
- Clean, Premier League-inspired design
- Interactive cards and tables

## Technologies Used
- **Backend:** Java, Spring Boot, Spring Data JPA, REST API
- **Frontend:** HTML5, CSS3, JavaScript (ES6 modules)
- **Database:** (Your DB here, e.g., PostgreSQL/MySQL)

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/premier-hub.git
   cd premier-hub
   ```

2. **Database:**
    - Make sure you have PostgreSQL installed and running.
    - Log in to your database using psql:
       ```sh
       psql -U your_username -d your_database
       ```
    - Update the path in the `\COPY` command in `data/player_stats_schema.sql` to the absolute path of your `prem_stats.csv` file, for example:
       ```sql
       \COPY player_stats FROM '/.../.../premier-hub/data/prem_stats.csv' DELIMITER ',' CSV HEADER;
       ```
    - Run the schema and import script:
       ```sh
       \i data/player_stats_schema.sql
       ```

3. **Backend:**
    - Configure your database in `src/main/resources/application.properties`.
    - Build and run the Spring Boot app:
       ```sh
       ./mvnw spring-boot:run
       ```
4. **Frontend:**
    - Open `http://localhost:8080` in your browser.

## Project Structure
```
├── data/
│   ├── prem_stats.csv
│   └── player_stats_schema.sql
├── src/
│   ├── main/
│   │   ├── java/com/erick/premier_hub/...
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/
│   │   │   │   ├── js/
│   │   │   │   ├── index.html
│   │   │   │   └── ...
│   │   │   └── application.properties
│   └── test/
├── pom.xml
└── README.md
```

## API Endpoints
- `GET /api/v1/player` — List all players
- `GET /api/v1/player?team=Team-Name` — Players by team
- `GET /api/v1/player?position=Position` — Players by position
- `GET /api/v1/player?name=Player-Name` — Search by player name
- `GET /api/v1/player/nations` — List all nations
- `GET /api/v1/player/teams` — List all teams
- `POST /api/v1/player` — Add a new player 
- `PUT /api/v1/player` — Update an existing player
- `DELETE /api/v1/player/{playerName}` — Delete a player by name


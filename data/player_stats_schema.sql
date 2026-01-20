-- PostgresSQL schema for player_stats table
CREATE TABLE IF NOT EXISTS player_stats (
    name VARCHAR(100),
    nation VARCHAR(50),
    pos VARCHAR(50),
    age INTEGER,
    mp INTEGER,
    starts INTEGER,
    min FLOAT,
    gls FLOAT,
    ast FLOAT,
    pk FLOAT,
    crdy FLOAT,
    crdr FLOAT,
    xg FLOAT,
    xag FLOAT,
    team VARCHAR(100)
);

-- Copy all the data from prem_stats.csv to player_stats
-- Note: Adjust the file path in the \COPY command as necessary for your environment.
\COPY player_stats FROM '/Users/erickgonzalez/premier-hub/data/prem_stats.csv' DELIMITER ',' CSV HEADER;

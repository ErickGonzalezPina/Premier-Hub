package com.erick.premier_hub.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    // these are optional since the Repository layer has them by default
    void deleteByName(String playerName);

    Optional<Player> findByName(String name);
}
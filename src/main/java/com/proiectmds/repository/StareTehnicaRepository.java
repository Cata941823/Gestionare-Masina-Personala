package com.proiectmds.repository;

import com.proiectmds.model.StareTehnica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StareTehnicaRepository extends JpaRepository<StareTehnica, Integer> {
    List<StareTehnica> findById(int Id);
    //List<StareTehnica> findByAvariatii(boolean avariat);
    List<StareTehnica> findByKilometraj(int kilometraj);
}
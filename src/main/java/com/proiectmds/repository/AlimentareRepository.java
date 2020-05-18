package com.proiectmds.repository;

import com.proiectmds.model.Alimentare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlimentareRepository extends JpaRepository<Alimentare, Integer>{

}

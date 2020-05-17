package com.proiectmds.demo.repository;

import com.proiectmds.demo.model.Alimentare;
import com.proiectmds.demo.model.Documente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlimentareRepository extends JpaRepository<Alimentare, Integer>{

}

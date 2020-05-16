package com.proiectmds.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilizatorReposistory extends JpaRepository<Utilizator, Integer> {
    Utilizator findByUsernameAndParola(String user, String pass);
    List<Utilizator> findByEmail(String email);
}
package com.proiectmds.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MasinaRepository extends JpaRepository<Masina, Integer> {
    List<Masina> findByMarca(String marca);
    List<Masina> findByIduser(int iduser);
    List<Masina> findById(int id);
}

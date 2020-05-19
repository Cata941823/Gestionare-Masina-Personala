package com.proiectmds.repository;

import com.proiectmds.model.Masina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MasinaRepository extends JpaRepository<Masina, Integer> {
    List<Masina> findByMarca(String marca);
    List<Masina> findByIduser(int id);
    List<Masina> findById(int id);
}

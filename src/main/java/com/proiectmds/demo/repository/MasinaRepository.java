package com.proiectmds.demo.repository;

import com.proiectmds.demo.model.Masina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MasinaRepository extends JpaRepository<Masina, Integer> {
    List<Masina> findByMarca(String marca);
    List<Masina> findByIduser(String id);
   // List<Masina> get(String vin);
}

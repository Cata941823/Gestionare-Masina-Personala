package com.proiectmds.repository;

import com.proiectmds.model.Masina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MasinaRepository extends JpaRepository<Masina, Integer> {
    List<Masina> findByMarca(String marca);
<<<<<<< HEAD:src/main/java/com/proiectmds/demo/MasinaRepository.java
    List<Masina> findByIduser(int iduser);
    List<Masina> findById(int id);
=======
    List<Masina> findByIduser(String id);
   // List<Masina> get(String vin);
>>>>>>> b9b298e2214332aa8635556085c0aed6dacea35f:src/main/java/com/proiectmds/repository/MasinaRepository.java
}

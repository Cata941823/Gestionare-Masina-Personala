package com.proiectmds.repository;

import com.proiectmds.model.Documente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumenteReposistory extends JpaRepository<Documente, Integer>{

    List <Documente> findByIddocument(int iddocument);
    List <Documente> findByVin(String vin);

}

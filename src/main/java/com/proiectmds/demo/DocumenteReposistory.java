package com.proiectmds.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumenteReposistory extends JpaRepository<Documente, Integer>{

    List <Documente> findByIddocument(int iddocument);

}

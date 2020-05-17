package com.proiectmds.demo.repository;

import com.proiectmds.demo.model.Utilizator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilizatorReposistory extends JpaRepository<Utilizator, Integer> {

    Utilizator findByUsernameAndParola(String user, String pass);
    List<Utilizator> findByEmail(String email);

    @Query("SELECT SUM(st.kilometraj) FROM stare_tehnica st INNER JOIN masina m ON st.idmasina = m.id INNER JOIN utilizator u ON m.iduser = u.id WHERE lower(u.username) = lower(:username) GROUP BY u.id")
    public int findTotalKM(@Param("username") String username);

    @Query("SELECT SUM(m.pret) FROM masina m INNER JOIN utilizator u ON m.iduser = u.id WHERE lower(u.username) LIKE lower(:username) GROUP BY u.id")
    public int findPretMasini(@Param("username") String username);

    @Query("SELECT COUNT(m.id) FROM masina m INNER JOIN utilizator u ON m.iduser = u.id WHERE lower(u.username) LIKE lower(:username) GROUP BY u.id")
    public int findNrMasini(@Param("username") String username);

    @Query("SELECT COUNT(st.id) FROM stare_tehnica st INNER JOIN masina m ON st.idmasina = m.id INNER JOIN utilizator u ON m.iduser = u.id WHERE lower(u.username) = lower(:username) AND st.avariatii > 0 GROUP BY u.id")
    public int findNrAvariatii(@Param("username") String username);

    @Query("SELECT SUM(d.pret) FROM document d INNER JOIN masina m ON d.vin = m.vin INNER JOIN utilizator u ON m.iduser = u.id WHERE lower(u.username) = lower(:username) GROUP BY u.id")
    public int findTotalAlimentari(@Param("username") String username);

}
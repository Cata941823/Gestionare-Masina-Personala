package DAO;

import com.proiectmds.demo.Queries;
import com.proiectmds.demo.Utilizatori;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

@Repository
public class QueriesDAOImpl implements Queries {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int creareUtilizator(Utilizatori utilizator) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update((Connection connection)->{
            PreparedStatement preparedStatement;
            System.out.println("NU A AJUNS AICI MACAR\n----------------------\n");
            preparedStatement = connection.prepareStatement("INSERT INTO carlog.utilizatori (idUser. username, parola, nume, prenume, varsta, e-mail) VALUES ('3', 'antonio', 'admin'. 'sboiu', 'antonio', '21', 'antoniosboiu@gmail.com')");
            System.out.println("A AJUNS AICI MACAR\n----------------------\n");
            /* preparedStatement.setString(1, utilizator.getUsername());
            preparedStatement.setString(2, utilizator.getParola());
            preparedStatement.setString(3, utilizator.getNume());
            preparedStatement.setString(4, utilizator.getPrenume());
            preparedStatement.setString(5, utilizator.getVarsta());
            preparedStatement.setString(6, utilizator.getEmail());
            */
           return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().intValue();
    }

    @Override
    public List<Utilizatori> getUtilizatori() {
        List<Utilizatori> listaUtilizatori = new ArrayList<>();
        Collection<Map<String, Object>> rows = null;
        rows = jdbcTemplate.queryForList("SELECT username, parola, nume, prenume, varsta, e-mail FROM carlog.utilizatori;");
        rows.stream().map((row) -> {
            Utilizatori utilizator = new Utilizatori();
            utilizator.setUsername((String) row.get("username"));
            utilizator.setParola((String) row.get("parola"));
            utilizator.setNume((String) row.get("nume"));
            utilizator.setPrenume((String) row.get("prenume"));
            utilizator.setVarsta((String) row.get("varsta"));
            utilizator.setEmail((String) row.get("e-mail"));
            return utilizator;
        }).forEach((ss)->{
            listaUtilizatori.add((Utilizatori) ss);
        });
            return listaUtilizatori;
        };
}

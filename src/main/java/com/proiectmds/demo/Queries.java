package com.proiectmds.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Queries{

    // POST METHODS
    public abstract int creareUtilizator(Utilizatori utilizator);
    //public abstract int creareMasina(Masini masina);
    //public abstract int creareDocument(Document document);
    //public abstract int creareAlimentare(Alimentare alimentare);
    //public abstract int creareStareTehnica(Stare stare_tehnica);

    // GET METHODS
    public abstract List<Utilizatori> getUtilizatori();
    //public abstract List<Masini> getMasini();
    //public abstract List<Documente> getDocumente();
    //public abstract List<Alimentari> getAlimentari();
    //public abstract List<Stari> getStariTehnice();

}

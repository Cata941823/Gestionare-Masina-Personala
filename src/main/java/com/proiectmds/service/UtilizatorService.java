package com.proiectmds.service;

import com.proiectmds.model.Documente;
import com.proiectmds.model.Utilizator;
import com.proiectmds.repository.UtilizatorReposistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UtilizatorService {

    @Autowired
    UtilizatorReposistory utilizatorReposistory;

    public List<Utilizator> getAllUtilizator(){
        List<Utilizator> utilizatori = new ArrayList<Utilizator>();
        utilizatorReposistory.findAll().forEach(s -> utilizatori.add(s));
        return utilizatori;
    }

    public List<Utilizator> gasesteDupaEmail(String email){
        return utilizatorReposistory.findByEmail(email);
    }


    public void insertUtilizator(Utilizator utilizator){
        System.out.println("-------------\n");
        System.out.println(utilizator);
        utilizatorReposistory.save(utilizator);
    }

    public int getAllKilometraj(String username){
        return utilizatorReposistory.findTotalKM(username);
    }

    public int getAllPretMasina(String username){
        return utilizatorReposistory.findPretMasini(username);
    }

    public int getNrMasini(String username){
        return utilizatorReposistory.findNrMasini(username);
    }

    public int getNrAvariatii(String username){
        return utilizatorReposistory.findNrAvariatii(username);
    }

    public int getTotalAlimentari(String username){
        return utilizatorReposistory.findTotalAlimentari(username);
    }

    public List<Documente> findToateDocumentele(String username){ return utilizatorReposistory.findToateDocumentele(username); }

    public Utilizator logging(String user, String parola){
        return utilizatorReposistory.findByUsernameAndParola(user, parola);
    }

    public void deleteUtilizator(int id){
        utilizatorReposistory.deleteById(id);
    }

}
package com.proiectmds.demo;

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

    public void insertUtilizator(Utilizator utilizator){
        System.out.println("-------------\n");
        System.out.println(utilizator);
        utilizatorReposistory.save(utilizator);
    }

    public List<Utilizator> logging(String user, String parola){
        return utilizatorReposistory.findByUsernameAndParola(user, parola);
    }

    public void deleteUtilizator(int id){
        utilizatorReposistory.deleteById(id);
    }

}
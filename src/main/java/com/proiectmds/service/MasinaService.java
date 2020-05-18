package com.proiectmds.service;

import com.proiectmds.model.Masina;
import com.proiectmds.repository.MasinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class MasinaService {


    @Autowired
    MasinaRepository masinaRepository;

    public List<Masina> gasesteToateMasinileDupaMarca(String marca){
        return masinaRepository.findByMarca(marca);
    }

    public void insertMasina(Masina masina){
        System.out.println("-------------\n");
        System.out.println(masina);
        masinaRepository.save(masina);
    }

    public void deleteMasinaDupaId(int id){
        masinaRepository.deleteById(id);
    }

    /*public List<Masina> gasesteMasinaDupaVin(String vin) {
        return masinaRepository.get(vin);
    }
    */

    public List<Masina> getAllMasina(){
        List<Masina> masina = new ArrayList<Masina>();
        masinaRepository.findAll().forEach(s -> masina.add(s));
        return masina;
    }
}

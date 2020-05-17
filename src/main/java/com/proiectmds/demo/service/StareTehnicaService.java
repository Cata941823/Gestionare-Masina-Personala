package com.proiectmds.demo.service;

import com.proiectmds.demo.model.StareTehnica;
import com.proiectmds.demo.repository.StareTehnicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StareTehnicaService  {

    @Autowired
    StareTehnicaRepository stareTehnicaReposistory;

    /*public List<StareTehnica> getToateMasinileAvariate(boolean avariat){
        return stareTehnicaReposistory.findByAvarii(avariat);
    }*/

    public List<StareTehnica> gasestedupaid(int id){
        return stareTehnicaReposistory.findById(id);
    }

    public List<StareTehnica> getAllStareTehnica(){
        List<StareTehnica> stareTehnica = new ArrayList<StareTehnica>();
        stareTehnicaReposistory.findAll().forEach(s -> stareTehnica.add(s));
        return stareTehnica;
    }

    ///MasinicuKm nu este este tastat
    public List<StareTehnica>MasiniCuKm(int kilometraj){
           return stareTehnicaReposistory.findByKilometraj(kilometraj); }


    public void insertStareTehnica(StareTehnica stareTehnica){
        System.out.println("-------------\n");
        System.out.println(stareTehnica);
        stareTehnicaReposistory.save(stareTehnica);
    }


    public void deleteStareTehnica(int id){
        stareTehnicaReposistory.deleteById(id);
    }

}
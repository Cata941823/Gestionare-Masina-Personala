package com.proiectmds.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class MasinaController extends SpringBootServletInitializer {

    @Autowired
    MasinaService masinaService;
    @Autowired
    MasinaRepository masinaRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toate-marcile", method = RequestMethod.GET)
    public List<Masina> getMasiniByMarca(@RequestBody Map<String, String> payload){
        return masinaService.gasesteToateMasinileDupaMarca(payload.get("marca"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/masini-useri", method = RequestMethod.GET)
    public List<Masina> getMasiniByUserid(@RequestBody Map<String, Integer> payload){
        return masinaService.gasesteToateMasinileDupaIduser(payload.get("iduser"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/masini-id", method = RequestMethod.GET)
    public List<Masina> getMasiniByid(@RequestBody Map<String, Integer> payload){
        return masinaService.gasesteToateMasinileDupaId(payload.get("id"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/adauga-masina", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void insert(@RequestBody Masina masina){
        System.out.println(masina.getVin());
        masinaService.insertMasina(masina);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/sterge-masina", method = RequestMethod.DELETE)
    public void delete(@RequestBody Map<String, Integer> payload){
        masinaService.deleteMasinaDupaId(payload.get("id"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/update-masina", method = RequestMethod.PUT)
    public void update(@RequestBody Masina masina){
        masinaRepository.save(masina);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/masini")
    public List<Masina> getAllMasini(){
        return masinaService.getAllMasina();
    }
}

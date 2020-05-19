package com.proiectmds.controller;

import com.proiectmds.service.MasinaService;
import com.proiectmds.model.Masina;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class MasinaController extends SpringBootServletInitializer {

    @Autowired
    MasinaService masinaService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toate-marcile", method = RequestMethod.GET)
    public List<Masina> getMasiniByMarca(@RequestBody Map<String, String> payload){
        return masinaService.gasesteToateMasinileDupaMarca(payload.get("marca"));
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
    /*
    @RequestMapping(value = "/editeaza-masina-vin", method = RequestMethod.POST)
    public ModelAndView showVin(@PathVariable(name = "vin") String vin) {
        ModelAndView mav = new ModelAndView("edit_product");
        List<Masina> masini = masinaService.gasesteMasinaDupaVin(vin);
        mav.addObject("masini",masini);
        return mav;
    }
    */
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/masini")
    public List<Masina> getAllMasini(){
        return masinaService.getAllMasina();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/masini-utilizator", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public List<Masina> getMasiniUser(@RequestBody  Map<String, Integer> payload){
        return masinaService.findByIduser(payload.get("id"));
    }

}

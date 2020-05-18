package com.proiectmds.controller;

import com.proiectmds.service.StareTehnicaService;
import com.proiectmds.model.StareTehnica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class StareTehnicaController extends SpringBootServletInitializer {

    @Autowired
    StareTehnicaService stareTehnicaService;


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/masini-avariate")
    public List<StareTehnica> getAllStareTehnica(){
        return stareTehnicaService.getAllStareTehnica();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toate-masinile-avariate-dupa-id", method = RequestMethod.GET)
    public List<StareTehnica> VeziMasinaAvariataDupaID(@RequestBody Map<String, Integer> payload){
        return stareTehnicaService.gasestedupaid(payload.get("id"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/masini-cu-km", method = RequestMethod.GET)
    public List<StareTehnica> getMasinaCuKM(@RequestBody Map<String, Integer> payload){
        return stareTehnicaService.MasiniCuKm(payload.get("km"));
    }


    // POST METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/StareTehnicaCr", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void insert(@RequestBody StareTehnica stareTehnica){
        System.out.println(stareTehnica.getId());
        stareTehnicaService.insertStareTehnica(stareTehnica);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/StareTehnicaDelete", method = RequestMethod.POST)
    public void delete(@RequestBody Map<String, Integer> payload){
        stareTehnicaService.deleteStareTehnica(payload.get("id"));
    }



}

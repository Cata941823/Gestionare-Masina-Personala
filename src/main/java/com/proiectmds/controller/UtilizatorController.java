package com.proiectmds.controller;

import com.proiectmds.model.Documente;
import com.proiectmds.service.UtilizatorService;
import com.proiectmds.model.Utilizator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class UtilizatorController extends SpringBootServletInitializer {

    @Autowired
    UtilizatorService utilizatorService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toate-mail-urile", method = RequestMethod.GET)
    public List<Utilizator> gettooooooootiutilizatoriidupaemail(@RequestBody Map<String, String> payload){
        return utilizatorService.gasesteDupaEmail(payload.get("adresa-postala"));
    }

    // GET METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Utilizator login(@RequestBody Map<String, String> payload){
        return utilizatorService.logging(payload.get("username"), payload.get("parola"));
    }


    // GET METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/kilometraj", method = RequestMethod.POST)
    public int getAllKilometraj(@RequestBody Map<String, String> payload){
        return utilizatorService.getAllKilometraj(payload.get("username"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/valuemasini", method = RequestMethod.POST)
    public int getAllPretMasini(@RequestBody Map<String, String> payload){
        return utilizatorService.getAllPretMasina(payload.get("username"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/nrmasini", method = RequestMethod.POST)
    public int getNrMasini(@RequestBody Map<String, String> payload){
        return utilizatorService.getNrMasini(payload.get("username"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/nravariatii", method = RequestMethod.POST)
    public int getNrAvariatii(@RequestBody Map<String, String> payload){
        return utilizatorService.getNrAvariatii(payload.get("username"));
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/totalalimentari", method = RequestMethod.POST)
    public int getTotalAlimentari(@RequestBody Map<String, String> payload){
        return utilizatorService.getTotalAlimentari(payload.get("username"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/utilizatori")
    public List<Utilizator> getAllUtilizatori(){
        return utilizatorService.getAllUtilizator();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toatedocumentele", method = RequestMethod.POST)
    public List<Documente> getToateDocumentele(@RequestBody Map<String, String> payload){
        return utilizatorService.findToateDocumentele(payload.get("username"));
    }

    // POST METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/utilizatori", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void insert(@RequestBody Utilizator utilizator){
        utilizatorService.insertUtilizator(utilizator);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void delete(@RequestBody Map<String, Integer> payload){
        utilizatorService.deleteUtilizator(payload.get("id"));
    }


    // TEST
    @GetMapping("/signup")
    public String hello(@RequestParam(value = "name", defaultValue = "Alex") String name) {
        return String.format("Hello %s!", name);
    }

}



    /*
    @PostMapping("/blog/search")
    public List<Utilizator> search(@RequestBody Map<String, String> payload){
        String searchTerm = payload.get("parola");
        List<Utilizator> listaUseri = utilizator.findByParola(searchTerm);
        if(listaUseri.size() != 0){
            int x = listaUseri.size();
            for(int i = 0; i<listaUseri.size();i++) System.out.println("YUHUHUUUUI\n");
        }
        return listaUseri;
    }
*/

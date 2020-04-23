package com.proiectmds.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @RequestMapping(value = "/toate-mail-urile", method = RequestMethod.POST)
    public List<Utilizator> gettooooooootiutilizatoriidupaemail(@RequestBody Map<String, String> payload){
        return utilizatorService.gasesteDupaEmail(payload.get("adresa-postala"));
    }

    // GET METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public List<Utilizator> login(@RequestBody Map<String, String> payload){
        return utilizatorService.logging(payload.get("username"), payload.get("parola"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/utilizatori")
    public List<Utilizator> getAllUtilizatori(){
        return utilizatorService.getAllUtilizator();
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
    public String hello(@RequestParam(value = "name", defaultValue = "Catalin") String name) {
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

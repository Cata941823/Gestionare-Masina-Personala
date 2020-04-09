package controllers;

import DAO.QueriesDAOImpl;
import com.proiectmds.demo.Utilizatori;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
public class UtilizatoriController  extends SpringBootServletInitializer {

    Utilizatori utilizatori;


    public static void main(String[] args) {
        SpringApplication.run(UtilizatoriController.class, args);
    }

    QueriesDAOImpl queriesDaoImpl;
    

    @RequestMapping(value = "/utilizatori", method = RequestMethod.GET)
    public ResponseEntity<Object> creareUtilizator(@RequestBody Utilizatori utilizatori){
        return new ResponseEntity<>("Utilizatorul a fost creat cu succes.", HttpStatus.OK);
    }
/*
    @RequestMapping(value = "/lalala", method = RequestMethod.GET)
    public ResponseEntity<Object> getUtilizatori(){
        System.out.println(queriesDaoImpl.getUtilizatori());
        return new ResponseEntity<>(queriesDaoImpl.getUtilizatori(), HttpStatus.OK);
    }
*/
    @GetMapping("/signup")
    public String hello(@RequestParam(value = "name", defaultValue = "Catalin") String name) {
        return String.format("Hello %s!", name);
    }
/*

    @GetMapping("/test")
    public String index() {
        try {
            System.out.println("INDEX 1");
            System.out.println("ALO ALO: " + utilizatori.findById(1));

        } catch (Exception e) {
            e.printStackTrace();
        }
        return String.format("MERGE!!! USER: %s!", utilizatori.findById(1));
    }

    @PostMapping("/test")
    public Utilizatori create(@RequestBody Map<String, String> body){
        String username = body.get("username");
        String parola = body.get("parola");
        String nume = body.get("nume");
        String prenume = body.get("prenume");
        String varsta = body.get("varsta");
        String email = body.get("email");

        int varstax = Integer.parseInt(varsta);
        return utilizatori.save(new Utilizatori(username, parola, nume, prenume, varstax, email));
    }
*/
}

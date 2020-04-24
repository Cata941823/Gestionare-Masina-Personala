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
public class DocumenteController extends SpringBootServletInitializer {

    @Autowired
    DocumenteService documenteService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/toate-documentele", method = RequestMethod.GET)
    public List<Documente> getdupaIddocument(@RequestBody Map<String, Integer> payload){
        return documenteService.gasesteDupaIddocument(payload.get("iddocument"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/documents")
    public List<Documente> getAllDocumente(){
        return documenteService.getAllDocumente();
    }
}


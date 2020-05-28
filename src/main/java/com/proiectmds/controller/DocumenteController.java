package com.proiectmds.controller;

import com.proiectmds.model.Masina;
import com.proiectmds.model.Utilizator;
import com.proiectmds.service.DocumenteService;
import com.proiectmds.model.Documente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
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

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/documente-utilizator", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public List<Documente> getDocumenteUtilizator(@RequestBody  Map<String, String> payload){
        return documenteService.getAllByVin(payload.get("vin"));
    }

    // POST METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/insert-document", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void insert(@RequestBody Documente document){
        documenteService.insertDocument(document);
    }

    // POST METHODS
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/delete-document", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public void delete(@RequestBody Map<String, Integer> payload){
        documenteService.deleteDocument(payload.get("id"));
    }

}


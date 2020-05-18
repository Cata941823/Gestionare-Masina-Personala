package com.proiectmds.service;

import com.proiectmds.model.Documente;
import com.proiectmds.repository.DocumenteReposistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DocumenteService {

    @Autowired
    DocumenteReposistory documenteReposistory;

    public List<Documente> gasesteDupaIddocument (int iddocument) {
        return documenteReposistory.findByIddocument(iddocument);
    }

    public List<Documente> getAllDocumente(){
        List<Documente> documente = new ArrayList<Documente>();
        documenteReposistory.findAll().forEach(s -> documente.add(s));
        return documente;
    }



}

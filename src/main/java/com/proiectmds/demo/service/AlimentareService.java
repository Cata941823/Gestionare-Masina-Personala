package com.proiectmds.demo.service;

import com.proiectmds.demo.model.Documente;
import com.proiectmds.demo.repository.AlimentareRepository;
import com.proiectmds.demo.repository.DocumenteReposistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlimentareService {

    @Autowired
    AlimentareRepository alimentareRepository;

}

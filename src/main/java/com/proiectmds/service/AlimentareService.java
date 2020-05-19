package com.proiectmds.service;

import com.proiectmds.repository.AlimentareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlimentareService {

    @Autowired
    AlimentareRepository alimentareRepository;

}

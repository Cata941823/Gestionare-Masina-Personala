package com.proiectmds.controller;

import com.proiectmds.service.DocumenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class AlimentareController extends SpringBootServletInitializer {

    @Autowired
    DocumenteService documenteService;
}


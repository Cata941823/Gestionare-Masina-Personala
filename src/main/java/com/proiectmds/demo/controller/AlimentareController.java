package com.proiectmds.demo.controller;

import com.proiectmds.demo.service.DocumenteService;
import com.proiectmds.demo.model.Documente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("search")
public class AlimentareController extends SpringBootServletInitializer {

    @Autowired
    DocumenteService documenteService;
}


package com.proiectmds.demo;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
public class Utilizatori{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String username;
    private String parola;
    private String nume;
    private String prenume;
    private String varsta;

    private String email;

    public Utilizatori(){ };

    public Utilizatori(String username, String parola, String nume, String prenume, String varsta, String email) {
        this.username = username;
        this.parola = parola;
        this.nume = nume;
        this.prenume = prenume;
        this.varsta = varsta;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getParola() {
        return parola;
    }

    public void setParola(String parola) {
        this.parola = parola;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getVarsta() {
        return varsta;
    }

    public void setVarsta(String varsta) {
        this.varsta = varsta;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Utilizatori{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", parola='" + parola + '\'' +
                ", nume='" + nume + '\'' +
                ", prenume='" + prenume + '\'' +
                ", varsta=" + varsta +
                ", email='" + email + '\'' +
                '}';
    }


}

package com.proiectmds.demo;

import javax.persistence.*;

@Entity(name = "utilizator")
public class Utilizator {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String username;
    private String parola;
    private String nume;
    private String prenume;
    private String varsta;
    private String email;

    public Utilizator(){ };

    public Utilizator(String username, String parola, String nume, String prenume, String varsta, String email) {
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
        return "Utilizator{" +
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

package com.proiectmds.demo;

import javax.persistence.*;

@Entity(name = "stare_tehnica")
public class StareTehnica {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int idmasina;
    private int kilometraj;
    private boolean avarii;
    private String mentiuniavarii;

    public StareTehnica() {
    }

    public StareTehnica(int id_masina,int kilometraj, boolean avarii, String MentiuniAvarii) {
        this.idmasina = id_masina;
        this.kilometraj = kilometraj;
        this.avarii = avarii;
        this.mentiuniavarii = MentiuniAvarii;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_masina() {
        return idmasina;
    }

    public void setId_masina(int id_masina) {
        this.idmasina = id_masina;
    }

    public int getKilometraj() {
        return kilometraj;
    }

    public void setKilometraj(int kilometraj) {
        this.kilometraj = kilometraj;
    }

    public boolean isAvarii() {
        return avarii;
    }

    public void setAvarii(boolean avarii) {
        this.avarii = avarii;
    }

    public String getMentiuniAvarii() {
        return mentiuniavarii;
    }

    public void setMentiuniAvarii(String mentiuniAvarii) {
        mentiuniavarii = mentiuniAvarii;
    }

    @Override
    public String toString() {
        return "StareTehnica{" +
                "id=" + id +
                ", id_masina=" + idmasina +
                ", kilometraj=" + kilometraj +
                ", avarii=" + avarii +
                ", MentiuniAvarii='" + mentiuniavarii + '\'' +
                '}';
    }
}

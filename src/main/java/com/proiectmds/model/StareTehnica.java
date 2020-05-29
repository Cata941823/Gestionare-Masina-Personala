package com.proiectmds.model;

import javax.persistence.*;

@Entity(name = "stare_tehnica")
public class StareTehnica {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int idmasina;
    private int kilometraj;
    private int avariatii;
    private String mentiuniavariatii;

    public StareTehnica() {
    }

    public StareTehnica(int idmasina,int kilometraj, int avariatii, String mentiuniavariatii) {
        this.idmasina = idmasina;
        this.kilometraj = kilometraj;
        this.avariatii = avariatii;
        this.mentiuniavariatii = mentiuniavariatii;
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

    public void setId_masina(int idmasina) {
        this.idmasina = idmasina;
    }

    public int getKilometraj() {
        return kilometraj;
    }

    public void setKilometraj(int kilometraj) {
        this.kilometraj = kilometraj;
    }

    public int getAvariatii() {
        return avariatii;
    }

    public void setAvariatii(short avariatii) {
        this.avariatii = avariatii;
    }

    public String getMentiuniAvarii() {
        return mentiuniavariatii;
    }

    public void setMentiuniAvarii(String mentiuniAvarii) {
        mentiuniavariatii = mentiuniAvarii;
    }

    @Override
    public String toString() {
        return "StareTehnica{" +
                "id=" + id +
                ", id_masina=" + idmasina +
                ", kilometraj=" + kilometraj +
                ", avarii=" + avariatii +
                ", MentiuniAvarii='" + mentiuniavariatii + '\'' +
                '}';
    }
}

package com.proiectmds.model;

import javax.persistence.*;

@Entity(name = "stare_tehnica")
public class StareTehnica {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int idmasina;
    private int kilometraj;
    private short avariatii;
    private String mentiuniavarii;

    public StareTehnica() {
    }

    public StareTehnica(int id_masina,int kilometraj, short avariatii, String MentiuniAvarii) {
        this.idmasina = id_masina;
        this.kilometraj = kilometraj;
        this.avariatii = avariatii;
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

    public short getAvariatii() {
        return avariatii;
    }

    public void setAvariatii(short avariatii) {
        this.avariatii = avariatii;
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
                ", avarii=" + avariatii +
                ", MentiuniAvarii='" + mentiuniavarii + '\'' +
                '}';
    }
}

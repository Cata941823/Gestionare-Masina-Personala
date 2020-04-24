package com.proiectmds.demo;


import javax.persistence.*;

@Entity(name = "documente")
public class Documente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int iddocument;


    private String VIN;
    private String tipdocument;
    private String dataexpirare;
    private float pret;
    private String poza;

    public Documente() { }

    public Documente(int iddocument, String VIN, String tipdocument, String dataexpirare, float pret, String poza) {
        this.iddocument = iddocument;
        this.VIN = VIN;
        this.tipdocument = tipdocument;
        this.dataexpirare = dataexpirare;
        this.pret = pret;
        this.poza = poza;
    }


    public int getIddocument() {
        return iddocument;
    }

    public void setIddocument(int iddocument) {
        this.iddocument = iddocument;
    }

    public String getVIN() {
        return VIN;
    }

    public void setVIN(String VIN) {
        this.VIN = VIN;
    }

    public String getTipdocument() {
        return tipdocument;
    }

    public void setTipdocument(String tipdocument) {
        this.tipdocument = tipdocument;
    }

    public String getDataexpirare() {
        return dataexpirare;
    }

    public void setDataexpirare(String dataexpirare) {
        this.dataexpirare = dataexpirare;
    }

    public float getPret() {
        return pret;
    }

    public void setPret(float pret) {
        this.pret = pret;
    }

    public String getPoza() {
        return poza;
    }

    public void setPoza(String poza) {
        this.poza = poza;
    }

    @Override
    public String toString() {
        return "Documente{" +
                "iddocument=" + iddocument +
                ", VIN='" + VIN + '\'' +
                ", tipdocument='" + tipdocument + '\'' +
                ", dataexpirare='" + dataexpirare + '\'' +
                ", pret='" + pret + '\'' +
                ", poza='" + poza + '\'' +
                '}';
    }
}

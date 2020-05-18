package com.proiectmds.model;


import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Entity(name = "document")
public class Documente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int iddocument;


    private String vin;
    private String tipdocument;
    private Date dataexpirare;
    private int pret;

    public Documente() {
    }

    public Documente(int iddocument, String VIN, String tipdocument, Date dataexpirare, int pret) {
        this.iddocument = iddocument;
        this.vin = VIN;
        this.tipdocument = tipdocument;
        this.dataexpirare = dataexpirare;
        this.pret = pret;
    }


    public int getIddocument() {
        return iddocument;
    }

    public void setIddocument(int iddocument) {
        this.iddocument = iddocument;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String VIN) {
        this.vin = VIN;
    }

    public String getTipdocument() {
        return tipdocument;
    }

    public void setTipdocument(String tipdocument) {
        this.tipdocument = tipdocument;
    }

    public Date getDataexpirare() {
        return dataexpirare;
    }

    public void setDataexpirare(Date dataexpirare) {
        this.dataexpirare = dataexpirare;
    }

    public float getPret() {
        return pret;
    }

    public void setPret(int pret) {
        this.pret = pret;
    }


    @Override
    public String toString() {
        return "Documente{" +
                "iddocument=" + iddocument +
                ", VIN='" + vin + '\'' +
                ", tipdocument='" + tipdocument + '\'' +
                ", dataexpirare='" + dataexpirare + '\'' +
                ", pret='" + pret + '\'' +
                '}';
    }
}

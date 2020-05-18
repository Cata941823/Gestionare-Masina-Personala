package com.proiectmds.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name="masina")
public class Masina {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String vin;
    private int iduser;
    private String marca;
    private String model;
    private String nrinmatriculare;
    private Date dataachizitie;
    private String tipcombustibil;
    private int pret;

    public Masina(){};

    public Masina(int idmasina, String VIN, int iduser, String marca, String model, String nrinmatriculare, Date dataachizitie, String tipcombustibil, int pret) {
        this.id = idmasina;
        this.vin = VIN;
        this.iduser = iduser;
        this.marca = marca;
        this.model = model;
        this.nrinmatriculare = nrinmatriculare;
        this.dataachizitie = dataachizitie;
        this.tipcombustibil = tipcombustibil;
        this.pret = pret;
    }

    public int getId() {
        return id;
    }

    public void setId(int idmasina) {
        this.id = idmasina;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String VIN) {
        this.vin = VIN;
    }

    public int getIduser() {
        return iduser;
    }

    public void setIduser(int iduser) {
        this.iduser = iduser;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getNrinmatriculare() {
        return nrinmatriculare;
    }

    public void setNrinmatriculare(String nrinmatriculare) {
        this.nrinmatriculare = nrinmatriculare;
    }

    public Date getDataachizitie() {
        return dataachizitie;
    }

    public void setDataachizitie(Date dataachizitie) {
        this.dataachizitie = dataachizitie;
    }

    public String getTipcombustibil() {
        return tipcombustibil;
    }

    public void setTipcombustibil(String tipcombustibil) {
        this.tipcombustibil = tipcombustibil;
    }

    @Override
    public String toString() {
        return "Masina{" +
                "idmasina=" + id +
                ", VIN='" + vin + '\'' +
                ", iduser=" + iduser +
                ", marca='" + marca + '\'' +
                ", model='" + model + '\'' +
                ", nrinmatriculare='" + nrinmatriculare + '\'' +
                ", dataachizitie=" + dataachizitie +
                ", tipcombustibil='" + tipcombustibil + '\'' +
                '}';
    }
}

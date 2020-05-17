package com.proiectmds.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "alimentare")
public class Alimentare {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idalimentare;

    private Date dataalimentare;
    private int litri;
    private int iddocument;

    public Alimentare() {
    }

    public Alimentare(int idalimentare, Date dataalimentare, int litri, int iddocument) {
        this.idalimentare = idalimentare;
        this.dataalimentare = dataalimentare;
        this.litri = litri;
        this.iddocument = iddocument;
    }

    public int getIdalimentare() {
        return idalimentare;
    }

    public void setIdalimentare(int idalimentare) {
        this.idalimentare = idalimentare;
    }

    public Date getDataalimentare() {
        return dataalimentare;
    }

    public void setDataalimentare(Date dataalimentare) {
        this.dataalimentare = dataalimentare;
    }

    public int getLitri() {
        return litri;
    }

    public void setLitri(int litri) {
        this.litri = litri;
    }

    public int getIddocument() {
        return iddocument;
    }

    public void setIddocument(int iddocument) {
        this.iddocument = iddocument;
    }
}

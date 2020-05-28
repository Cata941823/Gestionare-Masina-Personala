import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export class Utilizator {
  id;
  username;
  parola;
  nume;
  prenume;
  varsta;
  email;
}

export class Documentt {
  iddocument;
  vin;
  tipdocumente;
  dataexpirare;
  pret;

}

export class Masina {
  id;
  vin;
  iduser;
  marca;
  model;
  nrinmatriculare;
  dataachizitie;
  tipcombustibil;
}

export class Document {
  iddocument;
  vin;
  tipdocument;
  dataexpirare;
  pret;
}

@Injectable({
  providedIn: 'root'
})
export class CarLogService {

  utilizator: Utilizator;
  username: String;

  constructor() { }
  masiniUtilizatorLogat: Array<Masina>;
  // documenteUtilizatorLogat: Array<Document> = new Array<Document>();

  private _documenteUtilizatorLogatSource = new Subject<Array<Document>>();
  documenteUtilizatorLogat$ = this._documenteUtilizatorLogatSource.asObservable();


  setDocumenteUtilizatorLogat(contentData) {
    let dummyArray: Array<Document> = new Array<Document>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
    })
    // this.documenteUtilizatorLogat = dummyArray;

    this._documenteUtilizatorLogatSource.next(dummyArray);

    // console.log("le-am setat anplm", this.documenteUtilizatorLogat);
  }

  getDocumenteUtilizatorLogat() {
    console.log("na-ti getDocumenteDinServiciu");
    return this.documenteUtilizatorLogat$;
  }

  setMasiniUtilizatorLogat(contentData) {
    let dummyArray: Array<Masina> = new Array<Masina>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
    })
    this.masiniUtilizatorLogat = dummyArray;
  }

  getMasiniUtilizatorLogat() {
    return this.masiniUtilizatorLogat;
  }

  setUtitizatorLogat(utilizator) {
    this.utilizator = utilizator;
  }

  getUtilizatorLogat() {
    return this.utilizator;
  }

}

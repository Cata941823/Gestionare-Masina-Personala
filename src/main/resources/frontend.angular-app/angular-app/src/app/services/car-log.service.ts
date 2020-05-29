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
  pret;
}

export class StareTehnica {
  id;
  id_masina;
  kilometraj;
  avariatii;
  mentiuniavariatii;
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
  stariTehniceUtilizatorLogatx: Array<StareTehnica> = new Array<StareTehnica>();
  stariTehniceUtilizatorLogaty: Array<StareTehnica> = new Array<StareTehnica>();
  documenteUtilizatorLogatx: Array<Document> = new Array<Document>();
  documenteUtilizatorLogaty: Array<Document> = new Array<Document>();

  private _documenteUtilizatorLogatSource = new Subject<Array<Document>>();
  documenteUtilizatorLogat$ = this._documenteUtilizatorLogatSource.asObservable();


  setDocumenteUtilizatorLogat(contentData) {
    let dummyArray: Array<Document> = new Array<Document>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
      console.log("Document:", entry);
    });

    for (let i = 0; i < dummyArray.length; i++) {
      this.documenteUtilizatorLogaty.push(dummyArray[i]);
    }
    this.documenteUtilizatorLogatx = this.documenteUtilizatorLogaty.filter((thing, i, arr) => arr.findIndex(t => t.iddocument === thing.iddocument) === i
    );
    // this.documenteUtilizatorLogatx = this.documenteUtilizatorLogaty.filter(function(elem, index, self) {
    //   return documentut.indexOf(item) == pos;
    // });

    console.log("DUMMY ARRAAAAAAY:", this.documenteUtilizatorLogatx);
    //this._documenteUtilizatorLogatSource.next(dummyArray);
  }

  getDocumenteUtilizatorLogat() {
    console.log("na-ti getDocumenteDinServiciu");
    return this.documenteUtilizatorLogatx;
    //return this.documenteUtilizatorLogat$;
  }

  setMasiniUtilizatorLogat(contentData) {
    let dummyArray: Array<Masina> = new Array<Masina>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
      console.log("MASINA:", entry.vin);
    });
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

  setStariTehniceUtilizatorLogat(contentData) {
    let dummyArray: Array<StareTehnica> = new Array<StareTehnica>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
      console.log("Stare tehnica:", entry);
    });
    for (let i = 0; i < dummyArray.length; i++) {
      this.stariTehniceUtilizatorLogaty.push(dummyArray[i]);
    }
    this.stariTehniceUtilizatorLogatx = this.stariTehniceUtilizatorLogaty.filter((thing, i, arr) => arr.findIndex(t => t.id === thing.id) === i);
    console.log("DUMMY ARRAAAAAAY:", this.stariTehniceUtilizatorLogatx);
  }

  getStariTehniceUtilizatori() {
    return this.stariTehniceUtilizatorLogatx;
  }
}

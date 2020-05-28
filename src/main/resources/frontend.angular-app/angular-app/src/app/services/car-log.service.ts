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
  masiniUtilizatorLogat: Array<Masina>;
  documenteUtilizatorLogatx: Array<Document> = new Array<Document>();
  documenteUtilizatorLogaty: Array<Document> = new Array<Document>();

  private _documenteUtilizatorLogatSource = new Subject<Array<Document>>();
  documenteUtilizatorLogat$ = this._documenteUtilizatorLogatSource.asObservable();

  constructor() {
  }

  setDocumenteUtilizatorLogat(contentData) {
    let dummyArray: Array<Document> = new Array<Document>();
    contentData.forEach(entry => {
      dummyArray.push(entry);
      console.log("Document:", entry);
    });

    for(let i = 0; i<dummyArray.length; i++){
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

}

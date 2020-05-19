import { Injectable } from '@angular/core';

export class Utilizator{
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

@Injectable({
  providedIn: 'root'
})
export class CarLogService {

  utilizator: Utilizator;
  username: String;

  constructor() { }

  setUtitizatorLogat(utilizator) {
    this.utilizator = utilizator;
  }

  getUtilizatorLogat() {
    return this.utilizator;
  }

}

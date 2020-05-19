import { Injectable } from '@angular/core';

export class Utilizator{
  username;
  parola;
  nume;
  prenume;
  varsta;
  email;
}

export class Masina{
  vin;
  iduser;
  marca;
  model;
  nrinmatriculare;
  tipcombustibil;
  pret;
}


@Injectable({
  providedIn: 'root'
})
export class CarLogService {

  utilizator: Utilizator;
  username: String;

  masini: Masina[];
  marca: String;
  constructor() { }

  setUtitizatorLogat(utilizator) {
    this.utilizator = utilizator;
  }

  getUtilizatorLogat() {
    return this.utilizator;
  }

  setUsername(username){
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  setMasini(contentData) {
    contentData.forEach(element => {
      this.masini.push(element);
    });
  }

  getMasina(){
    return this.masini;
  }

  setMarca(marca){
    this.marca=marca;
  }
  getMarca(){
    return this.marca;
  }

}

import { Injectable } from '@angular/core';

export class Utilizator{
  username;
  parola;
  nume;
  prenume;
  varsta;
  email;
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


  setUsername(username){
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
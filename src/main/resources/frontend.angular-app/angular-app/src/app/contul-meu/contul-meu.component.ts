import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Utilizator} from "../services/car-log.service";

@Component({
  selector: 'app-contul-meu',
  templateUrl: './contul-meu.component.html',
  styleUrls: ['./contul-meu.component.css']
})
export class ContulMeuComponent implements OnInit {

  // DECLARATII VARIABILE
  username: String;
  nume: String;
  prenume: String;
  email: String;
  varsta: String;
  utilizatorLogat: Utilizator = null;

  kilometraj;
  pret_masini;
  nr_masini;
  nr_avariatii;
  total_alimentari;

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();
    this.getKilometraj();
    this.getPretMasini();
    this.getNrAvariatii();
    this.getNrMasini();
    this.getTotalAlimentari();

    if (this.username == null) {
      this.redirectToLogin();
    }
  }

  initialiseUtilizatorLogat() {
    this.utilizatorLogat = this.carLogService.getUtilizatorLogat();
    if (this.utilizatorLogat) {
      this.username = this.utilizatorLogat.username;
      this.nume = this.utilizatorLogat.nume;
      this.prenume = this.utilizatorLogat.prenume;
      this.varsta = this.utilizatorLogat.varsta;
      this.email = this.utilizatorLogat.email;
    }
  }

  redirectToLogin() {
    this.router.navigateByUrl("/login", {skipLocationChange: true});
    this.location.replaceState('/login');
  }

  getKilometraj(){
    this.dataService.getKilometraj(this.username).subscribe(data => {
      this.kilometraj = data;
    });
  }

  getPretMasini(){
    this.dataService.getPretMasini(this.username).subscribe(data => {
      this.pret_masini = data;
    });
  }

  getNrMasini(){
    this.dataService.getNrMasini(this.username).subscribe(data => {
      this.nr_masini = data;
    });
  }

  getNrAvariatii(){
    this.dataService.getNrAvariatii(this.username).subscribe(data => {
      this.nr_avariatii = data;
    });
  }

  getTotalAlimentari(){
    this.dataService.getTotalAlimentari(this.username).subscribe(data => {
      this.total_alimentari = data;
    });
  }

}

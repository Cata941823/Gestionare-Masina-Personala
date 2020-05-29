import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Masina, Utilizator} from "../services/car-log.service";

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
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();

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

  redirectToPlatform() {
    this.router.navigateByUrl("/platforma", {skipLocationChange: true});
    this.location.replaceState('/platforma');
  }

  redirectToLogin() {
    this.router.navigateByUrl("/login", {skipLocationChange: true});
    this.location.replaceState('/login');
  }

  redirectToDocumente() {
    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
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

  getDocumente() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        console.log(data);
      })
    })
  }

  redirectToStareTehnica() {
    this.router.navigateByUrl("/stare-tehnica", {skipLocationChange: true});
    this.location.replaceState('/stare-tehnica');
  }


  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }

  redirectToAccount(){
    this.router.navigateByUrl("/myaccount", {skipLocationChange: true});
    this.location.replaceState('/myaccount');
  }

}

import { Component, OnInit } from '@angular/core';
import {CarLogService, Document, Masina, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-del-doc',
  templateUrl: './del-doc.component.html',
  styleUrls: ['./del-doc.component.css']
})
export class DelDocComponent implements OnInit {

  // DECLARATII VARIABILE

  Message: String;
  masiniUtilizatorLogat: Array<Masina> = null;
  documenteUtilizatorLogat: Array<Document> = null;

  id;
  username: String;
  nume: String;
  prenume: String;
  email: String;
  varsta: String;
  utilizatorLogat: Utilizator = null;
  displayedColumns: ["iddocument", "vin", "tipdocument", "dataexpirare", "pret"];

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.username == null) {
      this.redirectToLogin();
    }

    this.initialiseDocumente();
  }

  initialiseDocumente(){
    this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;

    // this.carLogService.documenteUtilizatorLogat$.subscribe(
    //   info => {
    //     this.documenteUtilizatorLogat = info;
    //   }
    // )
  }

  initialiseUtilizatorLogat() {
    this.utilizatorLogat = this.carLogService.getUtilizatorLogat();
    if (this.utilizatorLogat) {
      this.id = this.utilizatorLogat.id;
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

  redirectToAccount() {
    this.router.navigateByUrl("/myaccount", {skipLocationChange: true});
    this.location.replaceState('/myaccount');
  }

  redirectToDocumente() {
    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
  }

  getDocumente() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    this.masiniUtilizatorLogat.forEach(entry => {
      //this.listaNumeMasini.push(entry.marca);
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        console.log(data);
      })
    })
  }
}

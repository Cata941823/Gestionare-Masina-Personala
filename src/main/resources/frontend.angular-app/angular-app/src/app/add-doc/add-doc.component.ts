import { Component, OnInit } from '@angular/core';
import {CarLogService, Document, Masina, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {

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
  masina: any;
  brandSiMarcaMasiniUtilizatorLogat: ["iddocument", "vin", "tipdocument", "dataexpirare", "pret"];
  tipDocumente: any;
  document: any;
  pret: any;

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
    this.carLogService.documenteUtilizatorLogat$.subscribe(
      info => {
        this.documenteUtilizatorLogat = info;
      }
    )
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

  redirectBack(){
    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
  }
}

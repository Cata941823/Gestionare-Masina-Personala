import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Document, Masina, Utilizator} from "../services/car-log.service";


@Component({
  selector: 'app-documente',
  templateUrl: './documente.component.html',
  styleUrls: ['./documente.component.css']
})

export class DocumenteComponent implements OnInit {

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
  id_doc_stergere: any;
  show_message: string;

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

  redirectToAddDoc() {
    this.router.navigateByUrl("/add-doc", {skipLocationChange: true});
    this.location.replaceState('/add-doc');
  }

  redirectToDelDoc() {
    this.router.navigateByUrl("/del-doc", {skipLocationChange: true});
    this.location.replaceState('/del-doc');
  }



  stergereDocument() {
    let id: any;
    id = this.id_doc_stergere;
    this.dataService.stergereDocument(id).subscribe(data => {
      if (data == null) {
        this.show_message = "Document sters!";
        this.carLogService.setUtitizatorLogat(this.utilizatorLogat);
      }
    });
  }

}


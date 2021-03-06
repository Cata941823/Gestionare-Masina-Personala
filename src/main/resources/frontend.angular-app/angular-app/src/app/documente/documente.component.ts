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

    this.carLogService.getDocumenteUtilizatorLogat();

    this.initialiseDocumente();

    this.getDocumente();
  }

  initialiseDocumente(){
    this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;

    // this.carLogService.documenteUtilizatorLogat$.subscribe(
    //   info => {
    //     this.documenteUtilizatorLogat = info;
    //   }
    // )
  }



  getDocumente() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    console.log("MASINI UTLIZATOR LOGAT", this.masiniUtilizatorLogat);
    this.masiniUtilizatorLogat.forEach(entry => {
      //this.listaNumeMasini.push(entry.marca);
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        //this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;
        console.log("LALALALALLA documenteeelelle", data);
      })
    })
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
      this.Message = this.utilizatorLogat.username;
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

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }

  redirectToStareTehnica() {
    this.router.navigateByUrl("/stare-tehnica", {skipLocationChange: true});
    this.location.replaceState('/stare-tehnica');
  }

  redirectToDocumente() {
    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
  }

}


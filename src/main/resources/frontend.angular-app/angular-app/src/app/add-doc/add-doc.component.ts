import {Component, OnInit} from '@angular/core';
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
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
  documenteUtilizatorLogat: Array<Document> = null;
  //listaNumeMasini: Array<string>;

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


  // ADD DOCUMENT VARIABILE:
  vim_masina: any;
  document_masina: any;
  data_expirare: any;
  show_message: any;
  denumiriDocumente: Array<string> = ["Document", "Alimentare", "ITP", "RCA", "CASCO"];

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.username == null) {
      this.redirectToLogin();
    }

    this.initialiseDocumente();
    this.getDocumente();
    console.log("Catalin:", this.masiniUtilizatorLogat);
    //console.log("Razvan:", this.listaNumeMasini);

  }

  initialiseDocumente() {
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

  getDocumente() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();

    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
  }

  adaugaDocument() {

    let doc: Document = new Document();
    doc.vin = this.vim_masina;
    doc.tipdocument = this.document_masina;
    // console.log("Merge:", this.vim_masina);
    // console.log("Merge:", this.document_masina);
    // console.log("Merge:", this.data_expirare);
    // console.log("Merge:", this.pret);
    doc.dataexpirare = this.data_expirare;
    doc.pret = this.pret;

    this.dataService.insertDocument(doc).subscribe(data => {
      if (data == null) {
        this.show_message = "Document inserat cu succes!";
      }
    });
  }
}

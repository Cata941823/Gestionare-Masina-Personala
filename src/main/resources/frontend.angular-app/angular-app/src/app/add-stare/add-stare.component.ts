import { Component, OnInit } from '@angular/core';
import {CarLogService, Document, Masina, StareTehnica, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-add-stare',
  templateUrl: './add-stare.component.html',
  styleUrls: ['./add-stare.component.css']
})
export class AddStareComponent implements OnInit {

  avariatiiVariante: Array<String> = ["Da", "Nu"];
  avariatii: any;
  kilometraj: any;
  id_masina: any;
  mentiuni: any;
  show_message: any;


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
    //console.log("Catalin:", this.masiniUtilizatorLogat);
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
  }

  adaugaStare() {
    let st: StareTehnica = new StareTehnica();
    st.id_masina = this.id_masina;
    if(this.mentiuni != null) {
      st.mentiuniavariatii = this.mentiuni;
    }
    else{
      st.mentiuniavariatii = "";
    }
    if(this.avariatii == "Da") {
      st.avariatii = 1;
    }
    else{
      st.avariatii = 0;
    }
    st.kilometraj = this.kilometraj;

    this.dataService.insertStare(st).subscribe(data => {
      if (data == null) {
        this.show_message = "Stare tehnica inserata cu succes!";
      }
    });
  }

  redirectToPlatforma() {
    this.router.navigateByUrl("/platforma", {skipLocationChange: true});
    this.location.replaceState('/platforma');
  }

  getStariTehnice() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateStarileMasinilorUtilizatoruluiLogat(entry.id).subscribe(data => {
        this.carLogService.setStariTehniceUtilizatorLogat(data);
        console.log(data);
      })
    })
    // this.stareTehnica();
  }

}

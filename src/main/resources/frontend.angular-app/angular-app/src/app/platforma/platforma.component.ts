import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Document, Masina, StareTehnica, Utilizator} from "../services/car-log.service";

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.css']
})

export class PlatformaComponent implements OnInit {

  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
  documenteUtilizatorLogat: Array<Document> = null;
  stariTehniceUtilizator: Array<StareTehnica> = new Array<StareTehnica>();

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }

    this.importMasiniInAplicatie();
   // this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();

    console.log("MASINUTE IN PLATFORMA: ", this.masiniUtilizatorLogat);

    this.initialiseDocumente();
  }

  importMasiniInAplicatie() {
    this.getMasiniUtilizatorLogat(this.utilizatorLogat.id);
  }

  initialiseUtilizatorLogat() {
    this.utilizatorLogat = this.carLogService.getUtilizatorLogat();
    if (this.utilizatorLogat) {
      this.Message = this.utilizatorLogat.username;
    }
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

  getMasiniUtilizatorLogat(id) {
    this.dataService.getMasiniUtilizatorLogat(id).subscribe(data => {
      this.carLogService.setMasiniUtilizatorLogat(data);
      console.log(data);
    })
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

  getStariTehnice() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateStarileMasinilorUtilizatoruluiLogat(entry.id).subscribe(data => {
        this.carLogService.setStariTehniceUtilizatorLogat(data);
        console.log(data);
      })
    })
    this.stareTehnica();
  }

  // getStari(){
  //   this.stariTehniceUtilizator = this.carLogService.getStariTehniceUtilizatori();
  // }

  initialiseDocumente(){
    this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;
  }

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }

  stareTehnica() {
    this.router.navigateByUrl("/stare-tehnica", {skipLocationChange: true});
    this.location.replaceState('/stare-tehnica');
  }
}

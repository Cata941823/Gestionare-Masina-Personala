import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Document, Masina, Utilizator} from "../services/car-log.service";

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.css']
})
export class PlatformaComponent implements OnInit {

  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
 // documenteUtilizatorLogat: Array<Document> = null;
  documenteUtilizatorLogat: Array<Document> = new Array<Document>();

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
    this.getDocumente();





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
  initialiseDocumente(){

    this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;
    console.log("MASINI UTLIZATOR LOGAT2 !!",  this.documenteUtilizatorLogat);
    // this.carLogService.documenteUtilizatorLogat$.subscribe(
    //   info => {
    //     this.documenteUtilizatorLogat = info;
    //   }
    // )
  }

  // getDocumente() {
  //   console.log("Razvanescu 1:");
  //   this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
  //   console.log("Razvanescu 2:", this.masiniUtilizatorLogat);
  //   this.masiniUtilizatorLogat.forEach(entry => {
  //     console.log("Razvanescu 3:", entry.vin);
  //     this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
  //       this.carLogService.setDocumenteUtilizatorLogat(data);
  //       console.log(data);
  //     })
  //   })
  // }

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }
}

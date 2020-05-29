import {Component, OnInit} from '@angular/core';
import {CarLogService, Document, Masina, StareTehnica, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-stare-tehnica',
  templateUrl: './stare-tehnica.component.html',
  styleUrls: ['./stare-tehnica.component.css']
})

export class StareTehnicaComponent implements OnInit {

  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
  documenteUtilizatorLogat: Array<Document> = null;
  stariTehniceUtilizator: Array<StareTehnica> = new Array<StareTehnica>();
  id_stare_stergere: any;
  show_message: any;

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }
    this.importMasiniInAplicatie();

    this.initialiseDocumente();

    //this.getStariTehnice();
    this.initializeStariTehnice();

  }

  initializeStariTehnice(){
    this.stariTehniceUtilizator = this.carLogService.getStariTehniceUtilizatori();;
    console.log("DEBUG:", this.stariTehniceUtilizator);
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
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        console.log(data);
      })
    })
  }

  initialiseDocumente() {
    this.documenteUtilizatorLogat = this.carLogService.documenteUtilizatorLogatx;
  }

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }

  redirectToAddStari() {
    this.router.navigateByUrl("/add-stare", {skipLocationChange: true});
    this.location.replaceState('/add-stare');
  }

  redirectToDelStare() {
    this.router.navigateByUrl("/del-stare", {skipLocationChange: true});
    this.location.replaceState('/del-stare');
  }

  stergereStare() {
    let id: any;
    id = this.id_stare_stergere;
    this.dataService.stergereStare(id).subscribe(data => {
      if (data == null) {
        this.show_message = "Stare tehnica stearsa!";
        this.carLogService.setUtitizatorLogat(this.utilizatorLogat);
      }
    });

  }

  redirectToStareTehnica() {
    this.router.navigateByUrl("/stare-tehnica", {skipLocationChange: true});
    this.location.replaceState('/stare-tehnica');
  }

  redirectToPlatform() {
    this.router.navigateByUrl("/platforma", {skipLocationChange: true});
    this.location.replaceState('/platforma');
  }
}

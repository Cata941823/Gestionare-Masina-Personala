import { Component, OnInit } from '@angular/core';
import {CarLogService, Masina, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-lista-masini',
  templateUrl: './lista-masini.component.html',
  styleUrls: ['./lista-masini.component.css']
})
export class ListaMasiniComponent implements OnInit {


  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
  id_car_stergere: any;

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }

    this.getDocumente();
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

  redirectToAccount(){
    this.router.navigateByUrl("/myaccount", {skipLocationChange: true});
    this.location.replaceState('/myaccount');
  }

  redirectToDocumente(){
    this.router.navigateByUrl("/documente", {skipLocationChange: true});
    this.location.replaceState('/documente');
  }

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }


  getDocumente() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    console.log("Masinute:", this.masiniUtilizatorLogat);
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        console.log(data);
      })
    })
  }

  addCar() {
    this.router.navigateByUrl("/add-car", {skipLocationChange: true});
    this.location.replaceState('/add-car');
  }

  delCar() {
    let id: any;
    id = this.id_car_stergere;
    this.dataService.deleteMasina(id).subscribe(data => {
      if (data == null) {
        this.carLogService.setUtitizatorLogat(this.utilizatorLogat);
        this.router.navigateByUrl("/del-car", {skipLocationChange: true});
        this.location.replaceState('/del-car');
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

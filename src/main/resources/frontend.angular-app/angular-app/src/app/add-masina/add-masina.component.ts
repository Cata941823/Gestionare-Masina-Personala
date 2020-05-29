import { Component, OnInit } from '@angular/core';
import {CarLogService, Document, Masina, Utilizator} from "../services/car-log.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-add-masina',
  templateUrl: './add-masina.component.html',
  styleUrls: ['./add-masina.component.css']
})

export class AddMasinaComponent implements OnInit {

  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();
  vin_masina: any;
  marca_masina: any;
  model_masina: any;
  nr_masina: any;
  data_achizitie: any;
  combustibil: any;
  pret_masina: any;
  show_message: any;

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }

    this.importMasiniInAplicatie();
    this.getMasini();
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

  redirectToPlatform() {
    this.router.navigateByUrl("/platforma", {skipLocationChange: true});
    this.location.replaceState('/platforma');
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

  getMasiniUtilizatorLogat(id) {
    this.dataService.getMasiniUtilizatorLogat(id).subscribe(data => {
      this.carLogService.setMasiniUtilizatorLogat(data);
      console.log(data);
    })
  }
  getMasini() {
    this.masiniUtilizatorLogat = this.carLogService.getMasiniUtilizatorLogat();
    console.log("Masinute:", this.masiniUtilizatorLogat);
    this.masiniUtilizatorLogat.forEach(entry => {
      this.dataService.getToateDocumenteleMasinilorUtilizatoruluiLogat(entry.vin).subscribe(data => {
        this.carLogService.setDocumenteUtilizatorLogat(data);
        console.log(data);
      })
    })
  }

  adaugaMasina() {
    let car: Masina = new Masina();
    car.vin = this.vin_masina;
    car.nrinmatriculare = this.nr_masina;
    car.tipcombustibil = this.combustibil;
    car.dataachizitie = this.data_achizitie;
    car.model = this.model_masina;
    car.marca = this.marca_masina;
    car.iduser = this.utilizatorLogat.id;
    car.pret = this.pret_masina;

    this.dataService.insertCar(car).subscribe(data => {
      if (data == null) {
        this.show_message = "Masina adaugata cu succes!";
      }
    });
  }

  redirectBack() {

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
}

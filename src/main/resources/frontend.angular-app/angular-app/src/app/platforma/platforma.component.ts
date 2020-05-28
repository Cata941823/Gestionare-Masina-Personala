import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Masina, Utilizator} from "../services/car-log.service";

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.css']
})
export class PlatformaComponent implements OnInit {

  Message: String;
  utilizatorLogat: Utilizator = null;
  masiniUtilizatorLogat: Array<Masina> = new Array<Masina>();

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }
    this.importMasiniInAplicatie();
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

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }
}

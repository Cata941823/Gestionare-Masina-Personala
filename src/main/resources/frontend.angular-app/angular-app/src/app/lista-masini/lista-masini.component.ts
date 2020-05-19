import { Component, OnInit } from '@angular/core';
import {CarLogService, Utilizator} from "../services/car-log.service";
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

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
    this.initialiseUtilizatorLogat();

    if (this.Message == null) {
      this.redirectToLogin();
    }
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

}

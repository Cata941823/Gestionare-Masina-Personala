import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {DataService} from "../services/data.service";
import {CarLogService, Utilizator} from "../services/car-log.service";

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.css']
})
export class PlatformaComponent implements OnInit {

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

  redirectToGaraj() {
    this.router.navigateByUrl("/lista-masini", {skipLocationChange: true});
    this.location.replaceState('/lista-masini');
  }

}

import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {CarLogService, Utilizator} from "../services/car-log.service";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private location: Location, private dataService: DataService, private carLogService: CarLogService) {
  }

  ngOnInit(): void {
  }

  user;

  username;
  parola;
  catrePlatforma: String = "/login";
  platform: boolean = false;

  utilizatorLogat: Utilizator;

  signIn() {
    console.log(this.username, this.parola);
    this.dataService.signIn(this.username, this.parola).subscribe(data => {
      console.log(data);
      // this.carLogService.setUsername(this.username);
      this.carLogService.setUtitizatorLogat(data);
      this.modifiyRoute(data);
    });
  }

  modifiyRoute(data) {
    if (data) {
      console.log("A INTRAT");
      this.router.navigateByUrl("/platforma", {skipLocationChange: true});
      this.location.replaceState('/platforma');
    } else {
      console.log("NOP");
    }
  }
}


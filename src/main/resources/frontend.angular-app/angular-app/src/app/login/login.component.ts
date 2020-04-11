import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

export class Utilizator {
  username;
  parola;
  nume;
  prenume;
  varsta;
  email;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private location: Location, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  user;

  username;
  parola;
  catrePlatforma: String = "/login";
  platform: boolean = false;

  signIn() {
    console.log(this.username, this.parola);
    this.dataService.signIn(this.username, this.parola).subscribe(data => {
      console.log(data);
      this.modifiyRoute(data);
    });
  }

  modifiyRoute(data){
    if (data.length>0) {
      console.log("A INTRAT");
      this.router.navigateByUrl("/platforma", {skipLocationChange: true});
      this.location.replaceState('/platforma');
    }
    else{
      console.log("NOP");
    }
  }
}


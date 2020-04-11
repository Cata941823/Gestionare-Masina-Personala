import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

export class Utilizator {
  username;
  parola;
  nume;
  prenume;
  varsta;
  email;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  users;

  username;
  parola;
  nume;
  prenume;
  varsta;
  email;

  catreLogin: string = "/signup";


  getUsers() {
    console.log("clicked");
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  insertUser() {
    console.log("clicked");
    console.log(this.nume);

    let user: Utilizator = new Utilizator();
    user.username = this.username;
    user.parola = this.parola;
    user.nume = this.nume;
    user.prenume = this.prenume;
    user.varsta = this.varsta;
    user.email = this.email;

    this.dataService.insertUser(user).subscribe(data => {
      if (data == null) {
        this.catreLogin = '/login';
      }
    });
  }
}
